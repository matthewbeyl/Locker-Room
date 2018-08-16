import { combineReducers } from 'redux';
import { TEAM_ACTIONS } from '../actions/teamActions';

const initialState = {
    team: {
    }
}

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEAM_ACTIONS.SELECT_PLAYER:
            return action.payload || state;
        default:
            return state;
    }
};

export default combineReducers({
    teamReducer
});