import { combineReducers } from 'redux';
import { PLAYER_ACTIONS } from '../actions/playerActions';

const tightends = (state = [], action) => {
    // console.log(action.payload);
    switch (action.type) {
        case PLAYER_ACTIONS.SET_TE:
            return action.payload || state;
        default:
            return state;
    }
};


export default combineReducers({
    tightends
});