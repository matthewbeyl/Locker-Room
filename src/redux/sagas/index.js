import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import qbSaga from './qbSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    qbSaga(),

    // watchIncrementAsync()
  ]);
}
