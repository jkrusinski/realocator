import axios from 'axios';
import {
  UPDATE_SEARCH_INPUT,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_SUGGESTIONS,
  CLEAR_SEARCH,
  HOST,
} from '../constants';

const updateSearchInput = (first, second) => ({
  type: UPDATE_SEARCH_INPUT,
  first,
  second,
});

const updateSearchQuery = (first, second) => ({
  type: UPDATE_SEARCH_QUERY,
  first,
  second,
});

const updateSearchSuggestions = (first, second) => ({
  type: UPDATE_SEARCH_SUGGESTIONS,
  first,
  second,
});

export const clearSearch = (first, second) => ({
  type: CLEAR_SEARCH,
  first,
  second,
});

const queryGooglePlaces = search => axios({
  method: 'get',
  url: `${HOST}/api/address`,
  params: { search },
}).then(res => res.data.predictions);

// position must be 'first' or 'second'
const makeRequest = (position, query, dispatch, getState) => {
  queryGooglePlaces(query)
    .then((results) => {
      const { search: { [position]: { input } } } = getState();

      if (input === '') {
        dispatch(clearSearch(position === 'first', position === 'second'));
      } else if (input !== query) {
        makeRequest(position, input, dispatch, getState);
      } else {
        dispatch(updateSearchSuggestions(
          position === 'first' ? results : null,
          position === 'second' ? results : null,
        ));
      }
    })
    .catch(console.error);
};

export const search = (first, second) => ((dispatch, getState) => {
  if (first === '' || second === '') {
    dispatch(clearSearch(first === '', second === ''));
  } else {
    dispatch(updateSearchInput(first, second));

    const {
      search: {
        first: { requestActive: firstActive },
        second: { requestAcitve: secondActive },
      },
    } = getState();

    // if query is already active, do not initiate a new one
    // the query callback will to a check to see if input has changed
    // and will make a new request if needed
    if (!firstActive && first) {
      dispatch(updateSearchQuery(first, null));
      makeRequest('first', first, dispatch, getState);
    }

    if (!secondActive && second) {
      dispatch(updateSearchQuery(null, second));
      makeRequest('second', second, dispatch, getState);
    }
  }
});
