import React, { useState } from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

import { useSelector, useDispatch } from 'react-redux';
import { getDataAuth } from '../../../store/selectors';
import { authenticate } from '../../../store/actions';

import { login } from '../Authentication';

_tokenAsync = async () => {
  return await AsyncStorage.getItem('token');
}

_clientAsync = async () => {
  return await AsyncStorage.getItem('client');
}

const LoginView = ({ ingresar }) => {

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const auth = () => {
        if(correo != '' && contrasena != ''){
            login(correo, contrasena).then(
              (response) => {
                if(!response.success){
                  if(response.data){
                    ingresar();
                    AsyncStorage.setItem('usr', correo.toString().toLowerCase());
                    AsyncStorage.setItem('pw', contrasena.toString());

                    _tokenAsync().then(
                      (respToken) => (
                        _clientAsync().then(
                          (respClient) => {
                            autenticar(respToken, respClient);
                          }
                        ) 
                      )
                    );
                  }else{
                    Alert.alert(
                      'Error al autenticar',
                      'usuario y/o contraseña incorrectos',
                      [
                        {text: 'OK', onPress: () => console.log('ok')},
                      ],
                      {cancelable: false},
                    );
                  }
                }
              }
            );
            
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

    const autenticar = (token, client) => dispatch(authenticate(correo.toLowerCase(), contrasena, client, token));

  	return (
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa!</Text>
            <View style={styles.containerInputs}>
                <InputText placeholder={"Correo"} icon={'email'} value={correo} onChangeText={setCorreo}></InputText>
                <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'} value={contrasena} onChangeText={setContrasena}></InputText>
            </View>
            <ButtonText name={"Acceder"} evento={auth}></ButtonText>
         </View>
  	);
};

export default LoginView;
