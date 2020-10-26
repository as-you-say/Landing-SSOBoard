import { put, delay, fork, cancel, select, call } from 'redux-saga/effects';
import lruCache from 'lru-cache';
import { FetchStatus } from '../constants';
import { callApi } from './apiUtility';
import { actions } from '../actions';
import { FETCH_PAGE, FETCH_KEY } from './reduxUtility';

// FetchKey 값을 가져오는 함수
export function getFetchKey(action) {
  const fetchKey = action[FETCH_KEY];
  return fetchKey === undefined ? action.type : String(fetchKey);
}

// 함수가 리덕스사가의 부수효과 함수 중에서 call 에 해당하는가?
const SAGA_CALL_TYPE = call(() => {}).type;
function getIsCallEffect(value) {
  return value && value.type === SAGA_CALL_TYPE;
}

// 함수가 제너레이터인지 구분해주는 함수
function getIsGeneratorFunction(obj) {
  const constructor = obj.constructor;
  if (!constructor) {
    return false;
  }
  if (
    'GeneratorFunction' === constructor.name ||
    'GeneratorFunction' === constructor.displayName
  ) {
    return true;
  }
  const proto = constructor.prototype;
  return 'function' === typeof proto.next && 'function' === typeof proto.throw;
}

// 쿼리 파라미터 순서가 바뀌어도 같은 key가 나오도록 키 이름으로 정렬한다
export function getApiCacheKey(actionType, { apiHost, url, params }) {
  const prefix = `${actionType}_${apiHost ? apiHost + url : url}`;
  const keys = params ? Object.keys(params) : [];
  if (keys.length) {
    return (
      prefix +
      keys.sort().reduce((acc, key) => `${acc}&${key}=${params[key]}`, '')
    );
  } else {
    return prefix;
  }
}

// 캐싱
const apiCache = new lruCache({
  max: 500,             // 최대 500개 캐싱
  maxAge: 1000 * 60 * 2,// 2분간 캐싱
});

// 0.5초 안에 API가 호출되지않으면 setIsSlow 액션을 호출하는 함수
function makeCheckSlowSaga(actionType, fetchKey) {
  return function* () {
    yield delay(500);
    yield put(
      actions.setIsSlow({
        actionType,
        fetchKey,
        isSlow: true,
      }),
    );
  };
}

/**
 * 캐시를 지우는 함수
 * @param {string=} actionType
 */
export function deleteApiCache(actionType) {
  let keys = apiCache.keys();
  if (actionType) {
    keys = keys.filter(key => key.includes(actionType));
  }
  for (const key of keys) {
    apiCache.del(key);
  }
}

export function makeFetchSaga({
  fetchSaga,  // 사가 함수
  canCache,
  getTotalCount = res => res?.totalCount, // 페이지네이션을 위한 전체 레코드 수 : 도출할 수 있는 값 - 한번에 보는 갯수: (10), 전체 페이지 수: (totalCaount/10+1)
}) {
  return function* (action) {
    const { type: actionType } = action;    // 액션 타입
    const fetchPage = action[FETCH_PAGE];   // FETCH 페이지
    const fetchKey = getFetchKey(action);   // FETCH 키 (없으면 생성하기 위해 함수로 사용)
    const nextPage = yield select(          // 
      state => state.common.fetchInfo.nextPageMap[actionType]?.[fetchKey] || 0,
    );
    const page = fetchPage !== undefined ? fetchPage : nextPage;
    const iterStack = [];

    let iter = fetchSaga(action, page); // 우리가 작성한 사가 함수가 호출되고 제너레이터 객체를 가져옵니다.
    let res;
    let checkSlowTask;
    let params;
    
    // 제너레이터의 반복자를 사용하여 함수를 실행
    while (true) {

      // next를 호출하면서 한단계마다 res 응답값을 전해주며 한단계씩 진행합니다.
      const { value, done } = iter.next(res);
      
      /**
       * isCallEffect : put, call, take 등의 부수효과 함수 중에서 call 에 해당하는가?
       * isGeneratorFunction : call 함수라면, 첫번째 인자의 함수가 제너레이터인가?
       * isCallApi : call 함수라면, 첫번째 인자의 함수가 우리가 정의한 callApi 함수인가?
       */
      const isCallEffect = getIsCallEffect(value);  
      const isGeneratorFunction = getIsGeneratorFunction(value.payload.fn);
      const isCallApi = value.payload.fn === callApi;
      
      // call 함수인가?
      // 사가 함수인가?
      const isSagaFunction = isCallEffect && isGeneratorFunction;
      if (isSagaFunction) {
        // iterStack에 등록 후 사가함수를 실행
        iterStack.push(iter);
        iter = value.payload.fn(...value.payload.args);
        continue;
      }

      // call 함수인가?
      // callApi(API 유틸리티) 함수인가?
      const isCallApiFunction = isCallEffect && isCallApi;
      if (isCallApiFunction) {

        // Fetch 상태 - 진행중
        // - 액션을 발생시켜서 해당 액션에 대한 Fetch 상태를 등록
        yield put(
          actions.setFetchStatus({
            actionType,
            fetchKey,
            status: FetchStatus.IN_PROGRESS,
          }),
        );

        // apiParam
        /**
         * 아래와 같이 호출됩니다.
         * 
         * yield call(fn, ...args);
         * fn = value.payload.fn; ---- 직접 정의한 유틸리티의 callApi 함수나, 리덕스 사가의 call 함수
         * param = value.payload.args[0];
         * 
         * yield call(callApi, {
         *   apiHost: '외부 API 사용시 추가',
         *   url: '요청할 URL',
         *   params: { URL 파라미터 (캐시 키값 생성시 사용함) },
         *   data: { 파일이나 blob 데이터 (캐시 키값 생성시 사용안함) },
         * });
         */
        const apiParam = value.payload.args[0]; // { apiHost, url, params }
        const cacheKey = getApiCacheKey(actionType, apiParam);

        // 캐시를 사용하고, 캐시에 해당하는 키 값이 존재하는 경우에는 캐시를 불러옴
        let apiResult =
          canCache && apiCache.has(cacheKey)
            ? apiCache.get(cacheKey)
            : undefined;

        // 캐시 값이 존재하지 않는다면
        const isFromCache = !!apiResult;
        if (!isFromCache) {
          if (!apiResult) {
            checkSlowTask = yield fork(makeCheckSlowSaga(actionType, fetchKey)); // 타이머 시작! - 0.5초가 지나면 setIsSlow 액션이 발생할 예정
            apiResult = yield value; // callApi 함수 호출 후, 리스폰스 값이 됩니다. 이 반응값이 빠르게 즉, 0.5초안에 들어오지 못하면 setIsSlow 액션 발생
            if (checkSlowTask) {  // 0.5초 이내에 끝난다면 setIsSlow 액션이 발생되기 전에 캔슬되고, 아니라면 발생 후에 캔슬됩니다. 따라서 발생하면 의미가 없습니다.
              yield cancel(checkSlowTask);
            }

            // 여기서 왜 value 는 기다리는데 checkSlowTask 는 안기다리고 훅 넘어가냐 궁금하실 수 있습니다.
            // 그 이유는 call 함수는 멈춰있는 blocking
            // fork는 멈취있지 않은 non-blocking 형태로 실행되기 때문입니다.
          }
        }

        // 최종적으로 api의 결과를 받습니다.
        // - 캐시값 또는 api 호출의 결과값
        res = apiResult;

        // 결과값이 존재한다면
        if (apiResult) {

          // 요청성공 + 캐시사용 + 캐시에 없는 API 요청결과 라면 캐시에 넣어줍니다.
          const isSuccess = apiResult.isSuccess;
          if (isSuccess && canCache && !isFromCache) {
            apiCache.set(cacheKey, apiResult);
          }

          // 전체 카운트 라는 속성이 필요한 데이터인 경우에는 뭐.. 리스트를 뿌려주는 데이터겟죠? 
          // 그럴 경우에는 이 속성도 서버에서 같이 반환해주는데, totalCount 라는 속성입니다.
          // 그게 있는 경우에만 가져오도록 했습니다.
          const totalCount = getTotalCount(apiResult);

          /**
           * actionType: 말그대로 액션함수의 타입을 말합니다.
           * fetchKey: 액션 타입의 값을 키로 가집니다.
           * status: 성공이라면 SUCCESS, 실패라면 FAIL 속성을 가집니다.
           * totalCount: 전체 데이터의 수를 나타내지만 필요하지 않은 경우에는 값이 없을 수도 있습니다.
           * nextPage: 요청이 성공했다면 다음 페이지의 숫자, 실패했다면 현재 페이지의 숫자를 넣습니다.
           * errorMessage: 요청이 실패한 경우에만 결과 메시지를 넣습니다.
           */
          params = {
            actionType,
            fetchKey,
            status: isSuccess ? FetchStatus.SUCCESS : FetchStatus.FAIL,
            totalCount,
            nextPage: isSuccess ? page + 1 : page,
            errorMessage: isSuccess ? '' : apiResult.resultMessage,
          };

        }


      // 만약에 call 함수가 아니거나 callApi 함수가 아니라면
      // API에 대한 Fetch 상태관리나 캐싱 처리 없이
      // res 값에 value 만 넣어주면 됩니다.
      } else if (value !== undefined) {
        res = yield value;
      }

      // 그리고 모든게 완료되었다면 
      // - iterStack 안에 있는 제너레이터 작업을 진행합니다.
      // - FetchStatus 최근 요청상태를 저장합니다.
      // - break; 를 해서 끝냅니다.
      if (done) {
        const nextIter = iterStack.pop();
        if (nextIter) {
          iter = nextIter;
          continue;
        }

        if (params) {
          yield put(actions.setFetchStatus(params));
        }
        break;
      }
    }
  };
}