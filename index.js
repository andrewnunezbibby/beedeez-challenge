/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Component} from 'react';
import store from './src/reducers/capsuleReducer';

console.log(store);

AppRegistry.registerComponent(appName, () => MyApp);

class MyApp extends Component {
  render() {
    debugger;
    return (
      <Provider>
        <App store={store} />
      </Provider>
    );
  }
}
