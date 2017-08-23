import axios from 'axios';
import {
  UPDATE_ADDRESS_QUERY,
  UPDATE_ADDRESS_SUGGESTIONS,
  CLEAR_ADDRESS,
} from '../constants';

export const queryGooglePlaces = search => axios({
  method: 'get',
  url: 'http://localhost:3000/api/address',
  params: { search },
}).then(res => res.data.results);

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

export const queryAddress = (first, second) => ((dispatch) => {
  if (first === '') {
    dispatch(clearAddress(true, false));
  }

  if (second === '') {
    dispatch(clearAddress(false, true));
  }

  // will update query for empty string (falsy)
  dispatch(updateAddressQuery(first, second));

  if (first) {
    queryGooglePlaces(first)
      .then((results) => {
        dispatch(updateAddressSuggestions(results, null));
      })
      .catch(console.error);
  }

  if (second) {
    queryGooglePlaces(second)
      .then((results) => {
        dispatch(updateAddressSuggestions(null, results));
      })
      .catch(console.error);
  }
});
