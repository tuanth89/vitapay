import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './Home';
import RecordPage from './Record';
import {MainBottomTab} from './mainBottomTab';

const mainNavigation = createStackNavigator(
  {
    HOME_TAB: MainBottomTab,
  },
  {
    initialRouteName: 'HOME_TAB',
    headerMode: 'none',
    navigationOptions: {
      // title: 'Home',
      headerTransparent: true,
      gesturesEnabled: false,
      headerStyle: {
        borderBottomWidth: 0,
      },
      header: null,
    },
  },
);

export default createAppContainer(mainNavigation);
