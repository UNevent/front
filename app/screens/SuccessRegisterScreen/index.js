import React from 'react';
import SuccessView from '../../components/views/SuccessView';

const SuccessRegisterScreen = ({ navigation }) => {
  return <SuccessView goToFirstLogin={() => navigation.navigate('FirstLogin')}/>;
}

export default SuccessRegisterScreen;