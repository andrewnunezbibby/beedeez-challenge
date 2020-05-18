import {fetchCapsules} from '../redux/fetchCapsules';
import {
  FETCH_CAPSULES_PENDING,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_ERROR,
} from '../redux/actions';
import seedCapsules from '../seedData';

const initialState = {
  seedCapsules,
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
