import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = createStackNavigator({
	LandingScreen,
	RegisterScreen,
	LoginScreen,
}, { initialRouteName: 'LandingScreen' });

export default createAppContainer(AppNavigator);