import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

const RegisterView = ({}) => {

  	return (
      <View style={styles.container}>
        <Text style={styles.title}>Registráte!</Text>
        <View style={styles.container}>
          <InputText placeholder={"Usuario"} icon={'user'}></InputText>
          <InputText placeholder={"Correo"} icon={'envelope'}></InputText>
          <InputText passBool={true} placeholder={"Contraseña"} icon={'key'}></InputText>
          <InputText passBool={true} placeholder={"Verificar contraseña"}  icon={'key'}></InputText>
        </View>
        <ButtonText name={"Acceder"}></ButtonText>
      
      </View>
  	);
};

export default RegisterView;
