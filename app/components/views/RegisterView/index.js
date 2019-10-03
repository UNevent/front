import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import { TextInput } from "react-native-gesture-handler";
import InputText from "../../common/InputText/index.js";
import Button from "../../common/Button/index.js";

const RegisterView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola de nuevo!</Text>
        <InputText placeholder={"Usuario:"} type={'username'}></InputText>
        <InputText placeholder={"Correo:"} type={'emailAddress'}></InputText>
        <InputText placeholder={"Contraseña:"} type={'password'}></InputText>
        <InputText placeholder={"Verificar contraseña:"}  type={'password'}></InputText>
        <Button name={"Acceder"}></Button>
      
      </View>
  	);
};

export default RegisterView;
