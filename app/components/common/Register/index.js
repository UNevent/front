import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

const RegisterView = ({ registrar }) => {

  	return (
      <View style={styles.container}>
        <Text style={styles.title}>Registráte!</Text>
        <View style={styles.container}>
          <InputText placeholder={"Usuario"} icon={'person'}></InputText>
          <InputText placeholder={"Correo"} icon={'mail'}></InputText>
          <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'}></InputText>
          <InputText passBool={true} placeholder={"Verificar contraseña"}  icon={'vpn-key'}></InputText>
        </View>
        <ButtonText name={"Acceder"} evento={registrar}></ButtonText>
      
      </View>
  	);
};

export default RegisterView;
