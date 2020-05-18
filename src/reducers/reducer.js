import {fetchCapsules} from '../redux/fetchCapsules';
import {
  FETCH_CAPSULES_PENDING,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_ERROR,
} from '../redux/actions';

const initialState = {
  capsules: [
    {title: 'Prince', prof: 'singer'},
    {title: 'Jodeci', prof: 'singer'},
    {title: 'Patrick', prof: 'star'},
    {title: 'Michael Jordan', prof: 'goat'},
  ],
};

export default function(state = {}, action) {
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
        capsules: action.capsules,
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

// export const getCapsules = state => state.capsules;
// export const getCapsulesPending = state => state.pending;
// export const getCapsulesError = state => state.error;
