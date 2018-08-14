import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import quarterback from './qbReducer';

const store = combineReducers({
  user,
  login,
  quarterback
});

export default store;
