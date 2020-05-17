import axios from 'axios';
import {
  FETCH_CAPSULES_PENDING,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_ERROR,
} from '../redux/actions';

const initialState = {
  capsules: [
    {name: 'Prince', prof: 'singer'},
    {name: 'Jodeci', prof: 'singer'},
    {name: 'Patrick', prof: 'star'},
    {name: 'Michael Jordan', prof: 'goat'},
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAPSULES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CAPSULES_SUCCESS:
      return {
        ...state,
        pending: false,
        capsules: action.payload,
      };
    case FETCH_CAPSULES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getCapsules = state => state.capsules;
export const getCapsulesPending = state => state.pending;
export const getCapsulesError = state => state.error;
