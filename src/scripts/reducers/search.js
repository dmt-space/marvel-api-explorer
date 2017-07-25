import { FILTER, SEARCH } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';

function search(state = '', action) {
  switch (action.type) {

    case SEARCH:
      console.log('search reducer', action);
      return action.text;
  }
  return state;
}

export default search;
