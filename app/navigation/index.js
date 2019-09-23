import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';

const AppNavigator = createStackNavigator({
  LandingScreen,
}, { initialRouteName: 'LandingScreen' });

export default createAppContainer(AppNavigator);