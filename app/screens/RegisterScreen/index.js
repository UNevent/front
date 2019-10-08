import React from 'react';
import RegisterView from '../../components/views/RegisterView';

const RegisterScreen = ({ navigation }) => {
  return <RegisterView goSuccess={() => navigation.navigate('SuccessRegisterScreen')}/>;
}

export default RegisterScreen;