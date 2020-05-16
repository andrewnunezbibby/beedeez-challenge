import React from 'react';

import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Component} from 'react';
import store from './redux/store';

console.log('STORE', store.getState());

// AppRegistry.registerComponent(appName, () => MyApp);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
