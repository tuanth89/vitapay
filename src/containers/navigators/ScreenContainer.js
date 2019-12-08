import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SCREENS from '../../config/screen';

import AuthStack from '../screens/Authentication';
import MainStack from '../screens/Main';
// import AuthLoadingScreen from '../screens/AuthLoading';

const rootStack = createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: SCREENS.AUTH,
  },
);

const Container = createAppContainer(rootStack);

export default Container;
