import { FETCH_DRAFTS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_DRAFTS:
      return action.payload || false;
    default:
      return state;
  }
}
