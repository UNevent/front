import React, { useState }  from "react";
import { View, Text, Alert } from "react-native";
import styles  from './styles';
import InputText from "../InputText";
import ButtonText from "../ButtonText";

import { register } from '../Authentication';

const RegisterView = ({ registrar }) => {
  [email, setEmail] = useState('');
  [pass, setPass] = useState('');
  [pConfirm, setPConfirm] = useState('');

  const regist = () => {
    console.log(email)
    console.log(pass)
    console.log(pConfirm)
    if(email == ''){
      Alert.alert(
        'Error al Registrar usuario',
        'El correo es obligatorio',
        [
          {text: 'OK', onPress: () => console.log('ok')},
        ],
        {cancelable: false},
      );
    }else if(pass == ''){
      Alert.alert(
        'Error al Registrar usuario',
        'La contraseña es obligatoria',
        [
          {text: 'OK', onPress: () => console.log('ok')},
        ],
        {cancelable: false},
      );
    }else if(pass != '' && pConfirm != '' && pass != pConfirm){
      Alert.alert(
        'Error al Registrar usuario',
        'La contraseña y la confirmación no coinciden',
        [
          {text: 'OK', onPress: () => console.log('ok')},
        ],
        {cancelable: false},
      );
    }

    if(email != '' && pass != '' && pass != '' && pass === pConfirm){
      register(email, pass, pConfirm).then(
        (response) => {
          if(response.status && response.data && !response.errors){
            registrar();
          }else if(response.errors){
            Alert.alert(
              'Error al Registrar usuario',
              response.errors.full_messages[0],
              [
                {text: 'OK', onPress: () => console.log('ok')},
              ],
              {cancelable: false},
            );
          }
        }
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registráte!</Text>
      <View style={styles.container}>
        <InputText placeholder={"Correo"} icon={'mail'} onChangeText={setEmail}></InputText>
        <InputText passBool={true} placeholder={"Contraseña"} icon={'vpn-key'} onChangeText={setPass}></InputText>
        <InputText passBool={true} placeholder={"Verificar contraseña"}  icon={'vpn-key'} onChangeText={setPConfirm}></InputText>
      </View>
      <ButtonText name={"Acceder"} evento={regist}></ButtonText>
    
    </View>
  );
};

export default RegisterView;
