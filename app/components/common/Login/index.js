import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

const LoginView = ({}) => {

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo:"} icon={'envelope'}></InputText>
                <InputText placeholder={"Contraseña:"} icon={'key'}></InputText>
            </View>
            <ButtonText name={"Acceder"}></ButtonText>
        </View>
  	);
};

export default LoginView;
