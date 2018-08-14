import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import QBs from './qbReducer';

const store = combineReducers({
  user,
  login,
  QBs
});

export default store;
