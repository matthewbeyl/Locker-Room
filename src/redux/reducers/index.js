import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './qbReducer';
import runningbacks from './rbReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks,
  runningbacks
});

export default store;
