import axios from 'axios';
import { FETCH_USER, FETCH_OPINIONS, FETCH_DRAFTS } from './types';

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchOpinions = () => {
  return async dispatch => {
    const res = await axios.get('/api/opinions');
    dispatch({ type: FETCH_OPINIONS, payload: res.data });
  };
};

export const fetchDrafts = () => {
  return async dispatch => {
    const res = await axios.get('/api/mockdraft/');
    dispatch({ type: FETCH_DRAFTS, payload: res.data });
  };
};
