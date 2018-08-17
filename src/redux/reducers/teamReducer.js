import { TEAM_ACTIONS } from '../actions/teamActions';

const initialState = {
    team: {
        quarterbacks: [],
        runningbacks: [],
        widereceivers: [],
        tightends: [],
        kickers: [],
        defenses: []

    }
}

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEAM_ACTIONS.ADD_QBS:
            return {
                ...state.team,
                quarterbacks: [...state.team.quarterbacks, action.payload]
            }
        case TEAM_ACTIONS.ADD_RBS:

        default:
            return state;
    }
};

export default teamReducer
