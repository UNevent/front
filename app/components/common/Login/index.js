import React, { useState } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

import { useSelector, useDispatch } from 'react-redux';
import { getDataAuth } from '../../../store/selectors';
import { authenticate } from '../../../store/actions';

const LoginView = ({ ingresar }) => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const auth = () => {

        if(correo != '' && contrasena != ''){
            ingresar();
            AsyncStorage.setItem('usr', correo.toString());
            AsyncStorage.setItem('pw', contrasena.toString());
        }else{
            Alert.alert(
              'Error al autenticar',
              'ingresa tu usuario y contraseña',
              [
                {text: 'OK', onPress: () => console.log('ok')},
              ],
              {cancelable: false},
            );
        }
    }

    const auth_selector = useSelector(getDataAuth);
    const dispatch = useDispatch();

    const autenticar = () => dispatch(authenticate(correo, contrasena));

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo"} icon={'email'} value={correo} onChangeText={setCorreo}></InputText>
                <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'} value={contrasena} onChangeText={setContrasena}></InputText>
            </View>
            <ButtonText name={"Acceder"} evento={auth}></ButtonText>

            <ButtonText name={"Mostrar Redux User"} evento={()=> {autenticar();console.log(auth_selector)}}></ButtonText>
        </View>
  	);
};

export default LoginView;
