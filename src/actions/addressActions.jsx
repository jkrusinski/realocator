import { UPDATE_FIRST_ADDRESS, UPDATE_SECOND_ADDRESS } from '../constants';

export const updateFirstAddress = address => ({
  action: UPDATE_FIRST_ADDRESS,
  payload: address,
});

export const updateSecondAddress = address => ({
  action: UPDATE_SECOND_ADDRESS,
  payload: address,
});
