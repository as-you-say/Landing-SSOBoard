// 리듀서
// - 상태값을 저장하는 공통액션을 가진다. (SET_VALUE)

import { createReducer, setValueReducer } from '../utilities/reduxUtility';
import { Types } from '../actions/index';

const INITIAL_STATE = {
  myDashboard: [],
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MY_DASHBOARD]: (state, action) => {
    const { myDashboard } = action.payload;
    state.dashboard.myDashboard = myDashboard;
  },
});

export default reducer;