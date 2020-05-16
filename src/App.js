import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import logo from './logo.png';
import {connect} from 'react-redux';
import List from './components/List';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className="todo-app">
      <h1>Capsules</h1>
      <List />
    </div>
  );
}
