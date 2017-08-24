import { CLEAR_RESULTS, UPDATE_RESULTS } from '../constants';

const results = (state = [], action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return action.payload;

    case CLEAR_RESULTS:
      return [];

    default:
      return state;
  }
};

export default results;
