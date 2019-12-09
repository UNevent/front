import React from 'react';
import AccessView from '../../components/views/AccessView';
import { useSelector } from 'react-redux';
import { isAuth } from '../../store/selectors';

const LandingScreen = ({ navigation }) => {
	const isLoged_selector = useSelector(isAuth);
	
	if(isLoged_selector){
		navigation.navigate('App');
	}

	return <AccessView 
		goToRegister={() => navigation.navigate('RegisterScreen')}
		goToLogin={() => navigation.navigate('LoginScreen')}
		//goInvited={() => navigation.navigate('HomeInvitedScreen')}
	/>;
}

export default LandingScreen;