import {createStore} from 'redux';
import search from '../reducers/search';

export default createStore(
  search,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
