import { all, put, call, takeLeading } from 'redux-saga/effects';
import { Types, actions } from '../actions';
import { makeFetchSaga } from '../utilities/sagaUtility';
import { callApi } from '../utilities/apiUtility';

function* fetchMyDashboard({ username }) {
  const { isSuccess, data } = yield call(callApi, {
    url: '/myDashboard',
    method: 'get',
    data: {
      username,
    },
  })

  if (isSuccess && data) {
    yield put(actions.setMyDashboard(data.myDashboard));
  }
}

export default function* () {
  yield all([
    takeLeading(
      Types.FETCH_MY_DASHBOARD,
      makeFetchSaga({ fetchSaga: fetchMyDashboard, canCache: false }),
    )
  ]);
}
