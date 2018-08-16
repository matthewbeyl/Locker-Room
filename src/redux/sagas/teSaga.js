import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getTightends } from '../requests/getPositionsRequests';

function* teSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_TE, fetchTE);
  }

function* fetchTE() {    
    try {
        const TEs = yield getTightends();
        yield put({
            type: PLAYER_ACTIONS.SET_TE,
            payload: TEs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default teSaga;