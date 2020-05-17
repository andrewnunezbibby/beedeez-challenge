export const SEARCH = 'SEARCH';
export const FETCH_CAPSULES_PENDING = 'FETCH_CAPSULES_PENDING';
export const FETCH_CAPSULES_SUCCESS = 'FETCH_CAPSULES_SUCCESS';
export const FETCH_CAPSULES_ERROR = 'FETCH_CAPSULES_ERROR';

export const searchCapsules = searchTerm => ({
  type: SEARCH,
  searchTerm,
});

export const fetchCapsPending = () => ({
  type: FETCH_CAPSULES_PENDING,
});
export const fetchCapsSuccess = capsules => ({
  type: FETCH_CAPSULES_SUCCESS,
  capsules: capsules,
});
export const fetchCapsError = error => ({
  type: FETCH_CAPSULES_ERROR,
  error: error,
});
