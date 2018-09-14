import { combineReducers } from 'redux';
import authReducer from './authReducer';
import opinionsReducer from './opinionsReducer';
import draftReducer from './draftReducer';

export default combineReducers({
  auth: authReducer,
  opinions: opinionsReducer,
  drafts: draftReducer,
});
