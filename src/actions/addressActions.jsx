import axios from 'axios';
import {
  UPDATE_ADDRESS_INPUT,
  UPDATE_ADDRESS_QUERY,
  UPDATE_ADDRESS_SUGGESTIONS,
  CLEAR_ADDRESS,
} from '../constants';

const updateAddressInput = (first, second) => ({
  type: UPDATE_ADDRESS_INPUT,
  first,
  second,
});

const updateAddressQuery = (first, second) => ({
  type: UPDATE_ADDRESS_QUERY,
  first,
  second,
});

const updateAddressSuggestions = (first, second) => ({
  type: UPDATE_ADDRESS_SUGGESTIONS,
  first,
  second,
});

export const clearAddress = (first, second) => ({
  type: CLEAR_ADDRESS,
  first,
  second,
});

const queryGooglePlaces = search => axios({
  method: 'get',
  url: 'http://localhost:3000/api/address',
  params: { search },
}).then(res => res.data.results);

// position must be 'first' or 'second'
const makeRequest = (position, query, dispatch, getState) => {
  queryGooglePlaces(query)
    .then((results) => {
      const { addresses: { [position]: { input } } } = getState();

      if (input === '') {
        dispatch(clearAddress(position === 'first', position === 'second'));
      } else if (input !== query) {
        makeRequest(position, input, dispatch, getState);
      } else {
        dispatch(updateAddressSuggestions(
          position === 'first' ? results : null,
          position === 'second' ? results : null,
        ));
      }
    })
    .catch(console.error);
};

export const queryAddress = (first, second) => ((dispatch, getState) => {
  if (first === '' || second === '') {
    dispatch(clearAddress(first === '', second === ''));
  } else {
    dispatch(updateAddressInput(first, second));

    const {
      addresses: {
        first: { requestActive: firstActive },
        second: { requestAcitve: secondActive },
      },
    } = getState();

    if (!firstActive && first) {
      dispatch(updateAddressQuery(first, null));
      makeRequest('first', first, dispatch, getState);
    }

    if (!secondActive && second) {
      dispatch(updateAddressQuery(null, second));
      makeRequest('second', second, dispatch, getState);
    }
  }
});
