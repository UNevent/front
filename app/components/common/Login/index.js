import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

const LoginView = ({ ingresar }) => {

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo"} icon={'email'}></InputText>
                <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'}></InputText>
            </View>
            <ButtonText name={"Acceder"} evento={ingresar}></ButtonText>
        </View>
  	);
};

export default LoginView;
