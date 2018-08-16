import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './PlayerReducer';
import runningbacks from './PlayerReducer';
import widereceivers from './PlayerReducer';
import tightends from './PlayerReducer';
import kickers from './PlayerReducer';
import defenses from './PlayerReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks,
  runningbacks,
  widereceivers,
  tightends,
  kickers,
  defenses,
});

export default store;