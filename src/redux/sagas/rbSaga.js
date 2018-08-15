import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getRunningbacks } from '../requests/RBRequest';

function* rbSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_RB, fetchRBs);
  }

function* fetchRBs() {    
    try {
        const RBs = yield getRunningbacks();
        yield put({
            type: PLAYER_ACTIONS.SET_RB,
            payload: RBs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default rbSaga;