import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';
import { sagaMiddleware } from '../stores';

function* rootSaga() {
  yield all([
    dashboardSaga()
  ]);
}
sagaMiddleware.run(rootSaga);