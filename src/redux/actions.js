export const SEARCH = 'SEARCH';
export const GET_CAPS = 'GET_CAPS';

export const searchCapsules = searchTerm => ({
  type: SEARCH,
  searchTerm,
});

export const getCaps = state => ({
  type: GET_CAPS,
  state,
});
