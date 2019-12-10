import React from 'react'
import {View, Text, ImageBackground, Image } from "react-native"

import styles from './styles';
import Images from '../../../assets/Images'
import ButtonText from '../../common/ButtonText'


const LogoutView = ({ goToFirstLogin }) => {
  return (
    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <View style={styles.container}>
            <Image source={Images.unLogo} style={styles.logo}></Image>
                <Text style={styles.title}>Vuelve Pronto!</Text>
            <ButtonText name={'Aceptar'} icon={'check'} background='outline' backcolor='#ff5c5c' evento={goToFirstLogin}/>
        </View>
    </ImageBackground>
  )
}


export default LogoutView