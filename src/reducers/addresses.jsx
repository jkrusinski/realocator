import {
  UPDATE_ADDRESS_INPUT,
  UPDATE_ADDRESS_QUERY,
  UPDATE_ADDRESS_SUGGESTIONS,
  CLEAR_ADDRESS,
} from '../constants';

const defaultState = {
  input: '',
  query: '',
  requestActive: false,
  suggestions: [],
};

const address = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_INPUT:
      return action.payload
        ? { ...state, input: action.payload }
        : state;

    case UPDATE_ADDRESS_QUERY:
      return action.payload
        ? { ...state, query: action.payload, requestActive: true }
        : state;

    case UPDATE_ADDRESS_SUGGESTIONS:
      return action.payload
        ? { ...state, suggestions: action.payload, requestActive: false }
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
