import React from 'react';
import LoginView from '../../components/views/LoginView';

function login(navigation){
	navigation.navigate('App');
}

const LoginScreen = ({ navigation }) => {
  return <LoginView goHome={() => login(navigation)}/>;
}

export default LoginScreen;