import { createStackNavigator, createAppContainer } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator(
	{
		LandingScreen: {screen: LandingScreen,  navigationOptions: () => ({title: `UNEvent`})},
		RegisterScreen: {screen: RegisterScreen,  navigationOptions: () => ({title: `Registrate`})},
		LoginScreen: {screen: LoginScreen,  navigationOptions: () => ({title: `Ingresa`})},
		HomeScreen: {screen: HomeScreen,  navigationOptions: () => ({title: `Eventos`})},
	}, 
	{ 
		initialRouteName: 'LandingScreen', 
		defaultNavigationOptions: {
	      	headerStyle: {
	        	backgroundColor: '#3A3A3A',
	      	},
	      	headerTintColor: '#FFF',
	      	headerTitleStyle: {
	        	fontWeight: 'bold',
	      	},
	    } 
	});

export default createAppContainer(AppNavigator);