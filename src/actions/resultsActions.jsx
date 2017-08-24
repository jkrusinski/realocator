import axios from 'axios';
import { CLEAR_RESULTS } from '../constants';

export const clearResults = () => ({
  type: CLEAR_RESULTS,
});

const queryRealtors = data => axios({
  method: 'post',
  url: 'http://localhost:3000/api/realtors',
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
      .then((results) => {
        const summedResults = results
          .reduce((acc, next) => acc.concat(next.map((result) => {
            const firstDistance = getDistance(
              [first.geometry.location.lat, first.geometry.location.lng],
              [result.geometry.location.lat, result.geometry.location.lng],
            );
            const secondDistance = getDistance(
              [second.geometry.location.lat, second.geometry.location.lng],
              [result.geometry.location.lat, result.geometry.location.lng],
            );
            const distanceSum = firstDistance + secondDistance;

            return {
              distanceSum,
              result,
            };
          })), []);

        const uniqueResultsObject = summedResults.reduce((acc, next) => {
          if (!acc[next.result.place_id]) {
            acc[next.result.place_id] = next;
          }
          return acc;
        }, {});

        const uniqueResults = Object.values(uniqueResultsObject);

        const sortedResults = uniqueResults.sort((a, b) => {
          if (a.distanceSum < b.distanceSum) {
            return -1;
          }

          if (a.distanceSum > b.distanceSum) {
            return 1;
          }

          return 0;
        });

        const topTenResults = sortedResults.slice(0, 10).map(item => item.result);

        console.log(topTenResults);
      })
      .catch(console.error);
  }
};