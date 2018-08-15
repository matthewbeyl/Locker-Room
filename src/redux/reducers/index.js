import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterbacks from './qbReducer';

const store = combineReducers({
  user,
  login,
  quarterbacks
});

export default store;
