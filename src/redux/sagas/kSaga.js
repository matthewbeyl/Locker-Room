import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getKickers } from '../requests/KRequests';

function* kSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_TE, fetchK);
  }

function* fetchK() {    
    try {
        const Ks = yield getKickers();
        yield put({
            type: PLAYER_ACTIONS.SET_K,
            payload: Ks
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default kSaga;