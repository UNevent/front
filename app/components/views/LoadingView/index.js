import React from "react";
import styles  from './styles';
import { ImageBackground, ActivityIndicator, Text } from 'react-native';
import Images from '../../../assets/Images';


const LoadingView = ({  }) => {
  return (
    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={{color: 'white'}}>Cargando...</Text>
    </ImageBackground>
  );
};
export default LoadingView;
