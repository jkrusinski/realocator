import {
  UPDATE_SEARCH_INPUT,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_SUGGESTIONS,
  CLEAR_SEARCH,
} from '../constants';

const defaultState = {
  input: '',
  query: '',
  requestActive: false,
  suggestions: [],
};

const query = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.payload
        ? { ...state, input: action.payload }
        : state;

    case UPDATE_SEARCH_QUERY:
      return action.payload
        ? { ...state, query: action.payload, requestActive: true }
        : state;

    case UPDATE_SEARCH_SUGGESTIONS:
      return action.payload
        ? { ...state, suggestions: action.payload, requestActive: false }
        : state;

    case CLEAR_SEARCH:
      return action.payload ? defaultState : state;

    default:
      return state;
  }
};

const search = (state = {}, action) => ({
  first: query(state.first, { ...action, payload: action.first }),
  second: query(state.second, { ...action, payload: action.second }),
});

export default search;
