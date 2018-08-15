import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './qbReducer';
import runningbacks from './rbReducer';
import widereceivers from './wrReducer';
import tightends from './teReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks,
  runningbacks,
  widereceivers,
  tightends,
});

export default store;