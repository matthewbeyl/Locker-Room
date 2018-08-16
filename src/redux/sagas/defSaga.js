import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getDefenses } from '../requests/DEFRequests';

function* defSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_DEF, fetchDEF);
  }

function* fetchDEF() {    
    try {
        const DEFs = yield getDefenses();
        yield put({
            type: PLAYER_ACTIONS.SET_DEF,
            payload: DEFs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default defSaga;