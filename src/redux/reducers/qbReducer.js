import { combineReducers } from 'redux';
import { PLAYER_ACTIONS } from '../actions/playerActions';

const qbName = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case PLAYER_ACTIONS.SET_PLAYERS:
            return action.payload || state;
        default:
            return state;
    }
};


export default combineReducers({
    qbName
});