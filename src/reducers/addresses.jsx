import { combineReducers } from 'redux';
import {
  UPDATE_FIRST_ADDRESS,
  UPDATE_SECOND_ADDRESS,
  CLEAR_ADDRESSES,
} from '../constants';

const first = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FIRST_ADDRESS:
      return action.payload;
    case CLEAR_ADDRESSES:
      return '';
    default:
      return state;
  }
};

const second = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SECOND_ADDRESS:
      return action.payload;
    case CLEAR_ADDRESSES:
      return '';
    default:
      return state;
  }
};

const addresses = combineReducers({ first, second });

export default addresses;
