const Types = {
  FETCH_MY_DASHBOARD: 'FETCH_MY_DASHBOARD'
}

const actions = {
  fetchMyDashboard: payload => ({ type: Types.FETCH_MY_DASHBOARD, payload }),
}

export default {
  Types,
  actions,
}