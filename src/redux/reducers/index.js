import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
// import userTeamReducer from './teamReducer'
import teamReducer from './teamReducer';
import playerReducer from './PlayerReducer';

const store = combineReducers({
  user,
  login,
  playerReducer,
  teamReducer,
  // userTeamReducer
});

export default store;