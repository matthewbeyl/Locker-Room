import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';

import teamReducer from './teamReducer';
import playerReducer from './PlayerReducer';

const store = combineReducers({
  user,
  login,
  playerReducer,
  teamReducer
});

export default store;