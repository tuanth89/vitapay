/**
 * Vitapay
 * @format
 * @flow
 */
import React from 'react';
import {YellowBox} from 'react-native';
import Container from './containers/navigators/ScreenContainer';
// import store from './redux/store';
// import {Provider} from 'react-redux';
// import AlertApp from './alertApp';

YellowBox.ignoreWarnings(['RCTRootView cancelTouches']);

Number.prototype.format = function(n, x) {
  let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

const App: () => React$Node = () => {
  return <Container />;
};

export default App;
