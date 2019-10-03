import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import { TextInput } from "react-native-gesture-handler";
import InputText from "../../common/InputText/index.js";

const RegisterView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
      <View style={styles.container}>
        <InputText placeholder={"Usuario:"} type={'username'}></InputText>
        <InputText placeholder={"Correo:"} type={'emailAddress'}></InputText>
        <InputText placeholder={"Contraseña:"} type={'password'}></InputText>
        <InputText placeholder={"Verificar contraseña:"}  type={'password'}></InputText>
      
      </View>
  	);
};

export default RegisterView;
