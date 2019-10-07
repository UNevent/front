import React from 'react';
import LoginView from '../../components/views/LoginView';

const LoginScreen = ({ navigation }) => {
  return <LoginView goHome={() => navigation.navigate('HomeScreen')}/>;
}

export default LoginScreen;