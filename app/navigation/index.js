import { createStackNavigator, createAppContainer, createSwitchNavigator, DrawerItems, createDrawerNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NewEventScreen from '../screens/NewEventScreen';
import EventScreen from '../screens/EventScreen';
import SuccessRegisterScreen from '../screens/SuccessRegisterScreen';
import UserScreen from '../screens/UserScreen';
import LogoutScreen from '../screens/LogoutScreen';

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

const UserNavigator = createStackNavigator(
	{
		UserScreen: {screen: UserScreen,  navigationOptions: () => ({title: `Mi Perfil`})},
	},
	{
		initialRouteName: 'UserScreen', 
		defaultNavigationOptions: defaultOptions
	});

const LogoutNavigator = createStackNavigator(
	{
		SignOutScreen: {screen: LogoutScreen,  navigationOptions: () => ({title: `Cerrar Sesión`})},
	},
	{
		initialRouteName: 'SignOutScreen', 
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
		UserNavigation: {screen: UserNavigator, navigationOptions: () => ({drawerLabel: `Mi Perfil`})},
		DrawerNavigation: {screen: EventNavigator, navigationOptions: () => ({drawerLabel: `Lista de Eventos`})},
		NewEventNavigation: {screen: NewEventNavigator, navigationOptions: () => ({drawerLabel: `Nuevo Evento`})},
		SignOutNavigation: {screen: LogoutNavigator, navigationOptions: () => ({drawerLabel: `Cerrar Sesión`})},
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