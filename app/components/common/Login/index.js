import React, { useState } from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

const LoginView = ({ ingresar }) => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo"} icon={'email'} value={correo} onChangeText={setCorreo}></InputText>
                <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'} value={contrasena} onChangeText={setContrasena}></InputText>
            </View>
            <ButtonText name={"Acceder"} evento={ingresar}></ButtonText>
        </View>
  	);
};

export default LoginView;
