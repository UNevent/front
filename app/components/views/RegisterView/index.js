import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import InputText from "../../common/InputText/index.js";
import ButtonText from "../../common/ButtonText/index.js";

const RegisterView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola de nuevo!</Text>
        <View style={styles.container}>
          <InputText placeholder={"Usuario:"} icon={'user'}></InputText>
          <InputText placeholder={"Correo:"} icon={'envelope'}></InputText>
          <InputText placeholder={"Contraseña:"} icon={'key'}></InputText>
          <InputText placeholder={"Verificar contraseña:"}  icon={'key'}></InputText>
        </View>
        <ButtonText name={"Acceder"}></ButtonText>
      
      </View>
  	);
};

export default RegisterView;
