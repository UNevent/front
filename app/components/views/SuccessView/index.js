import React from 'react'
import {View, Text, ImageBackground, Image, StyleSheet} from "react-native"

import styles from './styles';
import Images from '../../../assets/Images'
import ButtonText from '../../common/ButtonText'


const SuccessView = ({ goToFirstLogin }) => {
  return (
    <ImageBackground source={Images.backmap} style={styles.backmap}>
      <View style={styles.container}>
          <Image source={Images.unLogo} style={styles.logo}></Image>
	    		<Text style={styles.title}>Registro Exitoso!</Text>
          <ButtonText name={'Ingresar'} icon={'check'} background='outline' backcolor='#ff5c5c' evento={goToFirstLogin}/>
      </View>
    </ImageBackground>
  )
}


export default SuccessView