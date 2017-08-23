import {
  UPDATE_FIRST_ADDRESS,
  UPDATE_SECOND_ADDRESS,
  CLEAR_ADDRESSES,
} from '../constants';

export const updateFirstAddress = address => ({
  type: UPDATE_FIRST_ADDRESS,
  payload: address,
});

export const updateSecondAddress = address => ({
  type: UPDATE_SECOND_ADDRESS,
  payload: address,
});

export const clearAddresses = () => ({
  type: CLEAR_ADDRESSES,
});
