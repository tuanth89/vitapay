import React from 'react';
import {
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import HomeScreen from './Home';
import RecordScreen from './Record';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MainBottomTab = createBottomTabNavigator(
  {
    HOME: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name={'ios-home'} size={30} color={tintColor} />
        ),
      },
    },
    SEARCH: {
      screen: RecordScreen,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({tintColor}) => (
          <Ionicons name={'ios-search'} size={30} color={tintColor} />
        ),
      },
    },
    NOTIFICATION: {
      screen: RecordScreen,
      navigationOptions: {
        title: 'Add',
        tabBarIcon: ({tintColor}) => (
          <SimpleLineIcon name={'plus'} size={30} color={tintColor} />
        ),
      },
    },
    REPORT2: {
      screen: RecordScreen,
      navigationOptions: {
        title: 'Notification',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcon
            name={'bell-plus'}
            size={30}
            color={tintColor}
          />
        ),
      },
    },
    REPORT3: {
      screen: RecordScreen,
      navigationOptions: {
        title: 'Gallery',
        tabBarIcon: ({tintColor}) => (
          <MaterialIcons name={'image'} size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HOME',
    // tabBarComponent: TabBar,
    tabBarOptions: {
      // activeTintColor: '#F8F8F8',
      // inactiveTintColor: '#636363',
      activeTintColor: '#f8f4c6',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#6F81C1',
      },
      showLabel: false,
    },
    lazy: true,
    animationEnabled: true,

    // shifting: true,
    // labeled: true,
    // activeColor: '#f0edf6',
    // inactiveColor: '#3e2465',
    // barStyle: {backgroundColor: '#694fad'},
    // showIcon: true,
  },
);
