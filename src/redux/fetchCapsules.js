import {fetchCapsPending, fetchCapsSuccess, fetchCapsError} from './actions';

function fetchCapsules() {
  return dispatch => {
    dispatch(fetchCapsPending());
    fetch('https://api.beedeez.com/api/v1/public/lessons/200/1')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCapsSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchCapsError(error));
      });
  };
}

export default fetchCapsules;
