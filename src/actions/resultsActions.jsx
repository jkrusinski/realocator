import axios from 'axios';
import { CLEAR_RESULTS, UPDATE_RESULTS, HOST } from '../constants';

export const clearResults = () => ({
  type: CLEAR_RESULTS,
});

const updateResults = results => ({
  type: UPDATE_RESULTS,
  payload: results,
});

const queryRealtors = data => axios({
  method: 'post',
  url: `${HOST}/api/realtors`,
  data,
}).then(response => response.data);

const getDistance = (coor1, coor2) => Math.sqrt(
  ((coor1[0] - coor2[0]) ** 2) + ((coor1[1] - coor2[1]) ** 2),
);

export const fetchResults = () => (dispatch, getState) => {
  const { addresses: { first, second } } = getState();
  const addresses = [first, second]
    .filter(address => !!address)
    .map(({ name, place_id, geometry: { location } }) => ({
      name,
      place_id,
      location: `${location.lat},${location.lng}`,
    }));

  if (addresses.length) {
    queryRealtors(addresses)
      // given the time, I would love to refactor this into something more readable and efficient
      .then((results) => {
        // creates an array of objects with the result and its summed distance
        const summedResults = results
          .reduce((acc, next) => acc.concat(next.map((result) => {
            // get distance to first address, if exists
            const firstDistance = first
              ? getDistance(
                [first.geometry.location.lat, first.geometry.location.lng],
                [result.geometry.location.lat, result.geometry.location.lng],
              ) : 0;

            // get distance to second address, if exists
            const secondDistance = second
              ? getDistance(
                [second.geometry.location.lat, second.geometry.location.lng],
                [result.geometry.location.lat, result.geometry.location.lng],
              ) : 0;

            const distanceSum = firstDistance + secondDistance;

            return {
              distanceSum,
              result,
            };
          })), []);

        // filters out any repeat results that may have come from the two addresses
        const uniqueResultsObject = summedResults.reduce((acc, next) => {
          if (!acc[next.result.place_id]) {
            acc[next.result.place_id] = next;
          }
          return acc;
        }, {});

        // turns the previous object back into an array
        const uniqueResults = Object.values(uniqueResultsObject);

        // sorts the array based on distance
        const sortedResults = uniqueResults.sort((a, b) => {
          if (a.distanceSum < b.distanceSum) {
            return -1;
          }

          if (a.distanceSum > b.distanceSum) {
            return 1;
          }

          return 0;
        });

        // the closest 10 agencies, sorted
        const topTenResults = sortedResults.slice(0, 10).map(item => item.result);

        dispatch(updateResults(topTenResults));
      })
      .catch(console.error); // eslint-disable-line
  }
};
