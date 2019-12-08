import { createStackNavigator, createAppContainer, createSwitchNavigator, DrawerItems, createDrawerNavigator } from 'react-navigation';
import { getInitialState } from '../store/reducers/implementation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEventScreen from '../screens/NewEventScreen';
import EventScreen from '../screens/EventScreen';
import SuccessRegisterScreen from '../screens/SuccessRegisterScreen';

const defaultOptions = {
	      	headerStyle: {
	        	backgroundColor: '#242430',
	      	},
	      	headerTintColor: '#FFF',
	      	headerTitleStyle: {
	        	fontWeight: 'bold',
	      	},
	    }

const NewEventNavigator = createStackNavigator(
	{
		NewEventScreen: {screen: NewEventScreen,  navigationOptions: () => ({title: `Nuevo Evento`})},
	},
	{
		initialRouteName: 'NewEventScreen', 
		defaultNavigationOptions: defaultOptions
	});

const EventNavigator = createStackNavigator(
	{
		HomeScreen: {screen: HomeScreen,  navigationOptions: () => ({title: `Eventos`})},
		EventScreen: {screen: EventScreen,  navigationOptions: () => ({title: `Detalles`})},
	},
	{
		initialRouteName: 'HomeScreen', 
		defaultNavigationOptions: defaultOptions
	});

const AppNavigator = createDrawerNavigator(
	{	
		DrawerNavigation: {screen: EventNavigator, navigationOptions: () => ({drawerLabel: `Lista de Eventos`})},
		NewEventNavigation: {screen: NewEventNavigator, navigationOptions: () => ({drawerLabel: `Nuevo Evento`})}
	}, 
	{ 
		initialRouteName: 'DrawerNavigation', 
		defaultNavigationOptions: defaultOptions
	});

const NoLoggedNavigator = createStackNavigator(
	{
		LandingScreen: {screen: LandingScreen,  navigationOptions: () => ({title: `UNEvent`})},
		RegisterScreen: {screen: RegisterScreen,  navigationOptions: () => ({title: `Registrate`})},
		LoginScreen: {screen: LoginScreen,  navigationOptions: () => ({title: `Ingresa`})},
		SuccessRegisterScreen: {screen: SuccessRegisterScreen,  navigationOptions: () => ({title: `Registrate`})},
	},
	{ 
		initialRouteName: 'LandingScreen', 
		defaultNavigationOptions: defaultOptions
	});

const FirstLoginNavigator = createStackNavigator(
	{
		LoginScreen: {screen: LoginScreen,  navigationOptions: () => ({title: `Ingresa`})},
	},
	{ 
		initialRouteName: 'LoginScreen', 
		defaultNavigationOptions: defaultOptions
	});

export default createAppContainer(
									createSwitchNavigator(
										{
											App: AppNavigator,
											Enter: NoLoggedNavigator,
											FirstLogin: FirstLoginNavigator,
										},
										{
											//initialRouteName: getInitialState().session.user == "" && getInitialState().session.pass ? 'Enter':'App',
											initialRouteName: 'Enter',
										}
									)
								);