import React from 'react';
import AccessView from '../../components/views/AccessView';
import { useSelector } from 'react-redux';
import { isAuth } from '../../store/selectors';

const LandingScreen = ({ navigation }) => {
	const isLoged_selector = useSelector(isAuth);
	
	isLoged_selector.then(
		(response) => {
			if(response){
				navigation.navigate('App');
			}
		}
	);

	return <AccessView 
		goToRegister={() => navigation.navigate('RegisterScreen')}
		goToLogin={() => navigation.navigate('LoginScreen')}
		//goInvited={() => navigation.navigate('HomeInvitedScreen')}
	/>;
}

export default LandingScreen;