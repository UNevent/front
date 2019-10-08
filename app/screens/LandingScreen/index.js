import React from 'react';
import AccessView from '../../components/views/AccessView';

const LandingScreen = ({ navigation }) => {
  return <AccessView 
  	goToRegister={() => navigation.navigate('RegisterScreen')}
  	goToLogin={() => navigation.navigate('LoginScreen')}
  	//goInvited={() => navigation.navigate('HomeInvitedScreen')}
  />;
}

export default LandingScreen;