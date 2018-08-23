import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import qbSaga from './qbSaga';
import rbSaga from './rbSaga';
import wrSaga from './wrSaga';
import teSaga from './teSaga';
import kSaga from './kSaga';
import defSaga from './defSaga';
import teamSaga from './teamSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    qbSaga(),
    rbSaga(),
    wrSaga(),
    teSaga(),
    kSaga(),
    defSaga(),
    teamSaga(),
    // watchIncrementAsync()
  ]);
}
