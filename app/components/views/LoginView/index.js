import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import InputText from "../../common/InputText/index.js";
import ButtonText from "../../common/ButtonText/index.js";

const LoginView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Registráte!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo:"} icon={'envelope'}></InputText>
                <InputText placeholder={"Contraseña:"} icon={'key'}></InputText>
            </View>
            <ButtonText name={"Acceder"}></ButtonText>
        </View>
  	);
};

export default LoginView;
