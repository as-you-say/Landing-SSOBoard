// 리듀서
// - 상태값을 저장하는 공통액션을 가진다. (SET_VALUE)

import { createReducer, setValueReducer } from '../utilities/reduxUtility';
import { Types } from '../actions/index';
import { FetchStatus } from '../constants/index';

const INITIAL_STATE = {
  modalVisible: false,
  // 각각의 API 요청에 따른 정보를 Object 형태로 담아서 보관합니다.
  fetchInfo: {
    fetchStatusMap: {},
    isSlowMap: {},
    totalCountMap: {},
    errorMessageMap: {},
    nextPageMap: {},
  }
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_VALUE]: setValueReducer,
  [Types.SET_FETCH_STATUS]: (state, action) => {
    const {
      actionType,
      fetchKey,
      status,
      totalCount,
      nextPage,
      errorMessage,
    } = action.payload;
    
    // Status - 한개 (object)
    const isNotStoredFetchStatus = !state.fetchInfo.fetchStatusMap[actionType];
    if (isNotStoredFetchStatus) {
      state.fetchInfo.fetchStatusMap[actionType] = {};
    }
    state.fetchInfo.fetchStatusMap[actionType][fetchKey] = status;

    // 요청 - 완료/실패
    const isNotInProgress = status !== FetchStatus.IN_PROGRESS;
    if (isNotInProgress) {
      // IsSlow - 한개 (boolean)
      const isStoredIsSlow = state.fetchInfo.isSlowMap[actionType];
      if (isStoredIsSlow) {
        state.fetchInfo.isSlowMap[actionType][fetchKey] = false;
      }

      // TotalCount - 한개 (object)
      const isTotalCount = totalCount !== undefined;
      const isNotStoredTotalCount = !state.fetchInfo.totalCountMap[actionType];
      if (isTotalCount) {
        if (isNotStoredTotalCount) {
          state.fetchInfo.totalCountMap[actionType] = {};
        }
        state.fetchInfo.totalCountMap[actionType][fetchKey] = totalCount;
      }

      // NextPage - 한개 (object)
      const isNextPage = nextPage !== undefined;
      const isNotStoredNextPage = !state.fetchInfo.nextPageMap[actionType];
      if (isNextPage) {
        if (isNotStoredNextPage) {
          state.fetchInfo.nextPageMap[actionType] = {};
        }
        state.fetchInfo.nextPageMap[actionType][fetchKey] = nextPage;
      }

      // ErrorMessage - 한개 (object)
      const isNotStoredErrorMessage = !state.fetchInfo.errorMessageMap[actionType];
      if (isNotStoredErrorMessage) {
        state.fetchInfo.errorMessageMap[actionType] = {}
      }
      const isErrorMessage = errorMessage;
      if (isErrorMessage) {
        state.fetchInfo.errorMessageMap[actionType][fetchKey] = errorMessage;
      }
    }
  },
  [Types.SET_IS_SLOW]: (state, action) => {
    const { 
      actionType,
      fetchKey,
      isSlow,
    } = action.payload;
    const isNotStoredIsSlow = !state.fetchInfo.isSlowMap[actionType];
    if (isNotStoredIsSlow) {
      state.fetchInfo.isSlowMap[actionType] = {};
    }
    state.fetchInfo.isSlowMap[actionType][fetchKey] = isSlow;
  },
});

export default reducer;