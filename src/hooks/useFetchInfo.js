// @ts-nocheck
import { getFetchKey } from '../utilities/sagaUtility';
import { FETCH_KEY } from '../utilities/reduxUtility';
import { useSelector, shallowEqual } from 'react-redux';
import { FetchStatus } from '../constants';

export default function useFetchInfo(actionType, fetchKey) {
  // 충돌이 나지 않는 고유한 속성값을 위해서 Symbol 객체를 사용하여 속성을 정의
  // fetchKey가 없다면 액션 타입값을 그대로 입력한다.
  const _fetchKey = getFetchKey({
    type: actionType,
    [FETCH_KEY]: fetchKey,
  });

  // 리덕스 스토어에 값을 저장합니다.
  // state 객체에서 fetchInfo를 가져와가지고 아래의 6가지 값을 스토어에 저장
  /**
   * fetchStatus - FetchStatus.IN_PROGRESS, FetchStatus.SUCCESS, FetchStatus.FAIL
   * isFetching - v == FetchStatus.IN_PROGRESS
   * isFetched - v == FetchStatus.SUCCESS or FetchStatus.FAIL
   * isSlow - true or false
   * nextPage - number
   * totalCount - number
   * errorMessage = string
   */
  return useSelector(
    state => {
      const fetchInfo = state.common.fetchInfo;
      const fetchStatus = fetchInfo.fetchStatusMap[actionType]?.[_fetchKey];
      const isFetching = fetchStatus === FetchStatus.IN_PROGRESS;
      const isFetched = fetchStatus === FetchStatus.SUCCESS || fetchStatus === FetchStatus.FAIL;
      const isSlow = !!fetchInfo.isSlowMap[actionType]?.[_fetchKey] || 0;
      const nextPage = fetchInfo.nextPageMap[actionType]?.[_fetchKey] || 0;
      const totalCount = fetchInfo.totalCountMap[actionType]?.[_fetchKey] || 0;
      const errorMessage = fetchInfo.errorMessageMap[actionType]?.[_fetchKey];
      return ({
        fetchStatus,
        isFetching,
        isFetched,
        isSlow,
        nextPage,
        totalCount,
        errorMessage,
      })
    },
    shallowEqual,
  );
}
