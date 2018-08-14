import { combineReducers } from 'redux';
import authReducer from './authReducer';
import opinionsReducer from './opinionsReducer';

export default combineReducers({
  auth: authReducer,
  opinions: opinionsReducer,
});
