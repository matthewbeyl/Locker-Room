import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getQuarterbacks } from '../requests/getPositionsRequests';

function* qbSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_QB, fetchQB);
  }

function* fetchQB() {    
    try {
        const QBs = yield getQuarterbacks();
        yield put({
            type: PLAYER_ACTIONS.SET_QB,
            payload: QBs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default qbSaga;