import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import TextArea from "../TextArea/index";
import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-datepicker';
import { newEvent, uploadImage } from '../Events/Create'; 
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { validateSession } from '../Authentication';

import { useSelector, useDispatch } from 'react-redux';
import { getPlaces, getAditionals, getSession } from '../../../store/selectors';

const auto = () => {return useSelector(getPlaces)};

function findOption(query){
  if(!!query && query != undefined){
    if (query === '') {
      return [];
    }
  
    const regex = new RegExp(`${query.trim()}`, 'i');
    return auto().filter(item => item.text.search(regex) >= 0);
  }

  return [];
}

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
}

const cargueIMG = '';

_pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    base64: true,
  });

  return result;
};

const NewEventView = ({create}) => {
  useEffect(() => {
    getPermissionAsync().then(
      setLoadPermissions(true)
    )
  });

  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [place_id, setPlaceId] = useState('');
  const [place_detail, setPlaceDetail] = useState('');
  const [details, setDetails] = useState('');
  const [poster, setPoster] = useState('');
  const [loadPermissions, setLoadPermissions] = useState(false);
  const [imageB64m, setImageB64] = useState('');

  const datos = findOption(query);
  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

  const auth_selector = useSelector(getSession);

  const createEvent = () => {
    uploadImage(imageB64m).then(
      (response) => {
        if(response.success){
          if(title != '' && date != ''){
            validateSession(auth_selector.token, auth_selector.client, auth_selector.user).then(
              (respuesta) => (
                newEvent(respuesta.data.id, 2, title, date, place_detail, details, response.data.link, [2,5]).then(
                  (response) =>{
                    if(!response.success){
                      if(response.data){
                        Alert.alert(
                          'El evento fue creado de forma exitosa',
                          '',
                          [
                            {text: 'OK', onPress: () => create()},
                          ],
                          {cancelable: false},
                        );
                      }else{
                        Alert.alert(
                          'Ocurrió un error al crear el evento',
                          'El nombre del evento es requerido',
                          [
                            {text: 'OK', onPress: () => console.log('ok')},
                          ],
                          {cancelable: false},
                        );
                      }
                    }
                  }
                )
              )
            )
          }
        }else{
          Alert.alert(
            'Ocurrió un error al crear el evento',
            'La imagen no pudo cargarse',
            [
              {text: 'OK', onPress: () => console.log('ok')},
            ],
            {cancelable: false},
          );
        }
      }
    );
  }

  if(loadPermissions){
    return (
      <View style={styles.container}>
        <InputText placeholder={"Nombre evento:"} value={title} onChangeText={setTitle}></InputText>
        <DatePicker
          style={{width: 200,marginLeft: 40, backgroundColor:'#fff'}} //initial date from state
          mode="datetime" //The enum of date, datetime and time
          placeholder="Seleccionar fecha"
          format="DD MMM YYYY, h:mm a"
          minDate="01-01-2016"
          maxDate= {new Date('01/12/2026')}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          date={date }
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              paddingLeft: 10
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={setDate}
          
        />
        <InputText placeholder={"Lugar"} value={place_id} onChangeText={setPlaceId} icon={'map'}></InputText>
        <InputText placeholder={"Salón"} value={place_detail} onChangeText={setPlaceDetail} ></InputText>
        <TextArea placeholder={"Descripción"} value={details} onChangeText={setDetails}></TextArea>
        <ButtonText name={"Seleccionar imagen"} background={'outline'} value={poster} evento={() => _pickImage().then((result) => {if(!result.cancelled){setImageB64(result.base64)}})}></ButtonText>
        <ButtonText name={"Publicar"}  evento={createEvent}></ButtonText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#ffffff" />
      <Text style={{color: 'white'}}>Cargando...</Text>
    </View>
  )
  
};

export default NewEventView;