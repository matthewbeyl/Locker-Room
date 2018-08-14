import { PLAYER_ACTIONS} from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getQuarterbacks } from '../requests/QBRequest';

function* qbSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_PLAYERS, fetchPlayers);
  }

function* fetchPlayers() {
    try {
        const QBs = yield getQuarterbacks();
        yield put({
            type: PLAYER_ACTIONS.SET_PLAYERS,
            payload: QBs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default qbSaga;