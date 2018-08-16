import { combineReducers } from 'redux';
import { PLAYER_ACTIONS } from '../actions/playerActions';

const quarterbacks = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_QB:
            return action.payload || state;
        default:
            return state;
    }
};

const runningbacks = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_RB:
            return action.payload || state;
        default:
            return state;
    }
};

const widereceivers = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_WR:
            return action.payload || state;
        default:
            return state;
    }
};

const tightends = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_TE:
            return action.payload || state;
        default:
            return state;
    }
};

const kickers = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_K:
            return action.payload || state;
        default:
            return state;
    }
};

const defenses = (state = [], action) => {
    switch (action.type) {
        case PLAYER_ACTIONS.SET_DEF:
            return action.payload || state;
        default:
            return state;
    }
};

export default combineReducers({
    quarterbacks,
    runningbacks,
    widereceivers,
    tightends,
    kickers,
    defenses,
});