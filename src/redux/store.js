import {createStore, applyMiddleware, compose} from 'redux';
// https://github.com/jhen0409/react-native-debugger/issues/280
import getCaps from '../reducers/reducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  getCaps,
  composeEnhancer(applyMiddleware(...middlewares)),
);
