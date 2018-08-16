import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './qbReducer';
import runningbacks from './rbReducer';
import widereceivers from './wrReducer';
import tightends from './teReducer';
import kickers from './kReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks,
  runningbacks,
  widereceivers,
  tightends,
  kickers,
});

export default store;