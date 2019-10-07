import { createStackNavigator, createAppContainer, createSwitchNavigator  } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEventScreen from '../screens/NewEventScreen';

const AppNavigator = createStackNavigator(
	{
		HomeScreen: {screen: HomeScreen,  navigationOptions: () => ({title: `Eventos`})},
		NewEventScreen: {screen: NewEventScreen,  navigationOptions: () => ({title: `Nuevo Evento`})},
	}, 
	{ 
		initialRouteName: 'HomeScreen', 
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

const EnterNavigator = createStackNavigator(
	{
		LandingScreen: {screen: LandingScreen,  navigationOptions: () => ({title: `UNEvent`})},
		RegisterScreen: {screen: RegisterScreen,  navigationOptions: () => ({title: `Registrate`})},
		LoginScreen: {screen: LoginScreen,  navigationOptions: () => ({title: `Ingresa`})},
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


export default createAppContainer(
									createSwitchNavigator(
										{
											App: AppNavigator,
											Enter: EnterNavigator,
										},
										{
											initialRouteName: 'Enter',
										}
									)
								);