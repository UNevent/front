import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import InputText from "../../common/InputText/index.js";

const LoginView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
      <View style={styles.container}>
      <InputText placeholder={"Correo:"} type={'emailAddress'}></InputText>
      <InputText placeholder={"Contraseña:"} type={'password'}></InputText>
      
      </View>
  	);
};

export default LoginView;
