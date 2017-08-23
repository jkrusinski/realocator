import { SELECT_ADDRESS, CLEAR_ADDRESS } from '../constants';

const address = (state = null, action) => {
  switch (action.type) {
    case SELECT_ADDRESS:
      return action.payload;

    case CLEAR_ADDRESS:
      return null;

    default:
      return state;
  }
};

const addresses = (state = {}, action) => ({
  first: address(state.first, { ...action, payload: action.first }),
  second: address(state.second, { ...action, payload: action.second }),
});

export default addresses;
