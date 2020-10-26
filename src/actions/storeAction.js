import { createSetValueAction } from '../utilities/reduxUtility';

const Types = {
  SET_VALUE: 'common/SET_VALUE',
  SET_IS_SLOW: 'common/SET_IS_SLOW',
  SET_FETCH_STATUS: 'common/SET_FETCH_STATUS',
  SET_MY_DASHBOARD: 'dashboard/SET_MY_DASHBOARD',
}

const actions = {
  // Common
  setValue: createSetValueAction(Types.SET_VALUE),
  setIsSlow: payload => ({ type: Types.SET_IS_SLOW, payload }),
  setFetchStatus: payload => ({ type: Types.SET_FETCH_STATUS, payload }),

  // Dashboard
  setMyDashboard: payload => ({ type: Types.SET_MY_DASHBOARD, payload }),
}

export default {
  Types,
  actions,
}