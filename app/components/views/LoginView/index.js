import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import InputText from "../../common/InputText/index.js";
import Button from "../../common/Button/index.js";

const LoginView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Registráte!</Text>
            <InputText placeholder={"Correo:"} type={'emailAddress'}></InputText>
            <InputText placeholder={"Contraseña:"} type={'password'}></InputText>
            <Button name={"Acceder"}></Button>
        </View>
  	);
};

export default LoginView;
