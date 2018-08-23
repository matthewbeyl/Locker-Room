import { TEAM_ACTIONS } from '../actions/teamActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getUserTeam } from '../requests/teamRequests';

function* teamSaga() {    
    yield takeLatest(TEAM_ACTIONS.FETCH_TEAM, fetchTeam);
  }

function* fetchTeam() {    
    try {
        const UserTeam = yield getUserTeam();
        yield put({
            type: TEAM_ACTIONS.FETCH_TEAM,
            payload: UserTeam
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default teamSaga;