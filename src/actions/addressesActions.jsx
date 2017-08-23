import axios from 'axios';
import { SELECT_ADDRESS, CLEAR_ADDRESS } from '../constants';

const selectAddress = (first, second) => ({
  type: SELECT_ADDRESS,
  first,
  second,
});

export const clearAddress = (first, second) => ({
  type: CLEAR_ADDRESS,
  first,
  second,
});

const queryGooglePlaceId = search => axios({
  method: 'get',
  url: 'http://localhost:3000/api/place',
  params: { search },
}).then(response => response.data.result);

const makeRequest = (position, placeId, dispatch) => {
  queryGooglePlaceId(placeId)
    .then((result) => {
      dispatch(selectAddress(
        position === 'first' ? result : null,
        position === 'second' ? result : null,
      ));
    })
    .catch(console.error);
};

export const fetchAddress = (first, second) => (dispatch) => {
  if (first) {
    makeRequest('first', first, dispatch);
  }

  if (second) {
    makeRequest('second', second, dispatch);
  }
};
