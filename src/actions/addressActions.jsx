import {
  UPDATE_FIRST_ADDRESS,
  UPDATE_SECOND_ADDRESS,
  CLEAR_ADDRESSES,
} from '../constants';

export const updateFirstAddress = address => ({
  action: UPDATE_FIRST_ADDRESS,
  payload: address,
});

export const updateSecondAddress = address => ({
  action: UPDATE_SECOND_ADDRESS,
  payload: address,
});

export const clearAddresses = () => ({
  action: CLEAR_ADDRESSES,
});
