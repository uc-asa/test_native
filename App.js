
import React, {Component} from 'react';

import {Router, Scene } from 'react-native-router-flux';
import First from './components/First';
import Second from './components/Second';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="first" component={First} title="First"/>
        </Scene>
      </Router>
    );
  }
}