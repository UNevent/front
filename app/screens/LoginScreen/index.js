import React from 'react';
import LoginView from '../../components/views/LoginView';

const LoginScreen = ({ navigation }) => {
  return <LoginView goHome={() => navigation.navigate('App')}/>;
}

export default LoginScreen;