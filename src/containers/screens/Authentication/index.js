import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import RegisterScreen from './Register';
// import ResgisterScreen from './Register';

const authNavigation = createStackNavigator(
  {
    REGISTER: RegisterScreen,
  },
  {
    initialRouteName: 'REGISTER',
    headerMode: 'none',
  },
);

export default createAppContainer(authNavigation);
