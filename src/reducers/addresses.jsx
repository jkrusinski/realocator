import { combineReducers } from 'redux';
import { UPDATE_FIRST_ADDRESS, UPDATE_SECOND_ADDRESS } from '../constants';

const first = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FIRST_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};

const second = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SECOND_ADDRESS:
      return action.payload;
    default:
      return state;
  }
};

const addresses = combineReducers({ first, second });

export default addresses;
