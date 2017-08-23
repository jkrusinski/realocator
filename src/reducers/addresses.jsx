import {
  UPDATE_ADDRESS_QUERY,
  UPDATE_ADDRESS_SUGGESTIONS,
  CLEAR_ADDRESS,
} from '../constants';

const defaultState = {
  query: '',
  suggestions: [],
};

const address = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_QUERY:
      return action.payload
        ? { ...state, query: action.payload }
        : state;

    case UPDATE_ADDRESS_SUGGESTIONS:
      return action.payload
        ? { ...state, suggestions: action.payload }
        : state;

    case CLEAR_ADDRESS:
      return action.payload ? defaultState : state;

    default:
      return state;
  }
};

const addresses = (state = {}, action) => ({
  first: address(state.first, { ...action, payload: action.first }),
  second: address(state.second, { ...action, payload: action.second }),
});

export default addresses;
