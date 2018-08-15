import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './qbReducer';
import runningbacks from './rbReducer';
import widereceivers from './wrReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks,
  runningbacks,
  widereceivers,
});

export default store;
