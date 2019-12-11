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

//let auto = () => {return useSelector(getPlaces)};

let auto = [
  
{text: '103 Polideportivo - División de registro', id: 1},
{text: '104 Auditorio León de Greiff',  id: 2},
{text: '201 Facultad de Derecho, Ciencias Políticas y Sociales',  id: 3},
{text: '205 Edificio Orlando Fals Borda: Departamento de Sociología',  id: 4},
{text: '207 Museo de Arquitectura Leopoldo Rother',  id: 5},
{text: '210 Facultad de Odontología',  id: 6},
{text: '212 Aulas de Ciencias Humanas',  id: 7},
{text: '214 Edificio Antonio Nariño - Departamento de Lingüística.',  id: 8},
{text: '217 Edificio Francisco de Paula Santander: Diseño Gráfico',  id: 9},
{text: '224 Edificio Manuel Ancízar',  id: 10},
{text: '225 Edificio Rogelio Salmona de Postgrados en Ciencias Humanas',  id: 11},
{text: '228 Edificio de Enfermería Nuevo',  id: 12},
{text: '231 Departamento de Lenguas Extranjeras', id: 13},
{text: '235 Portería Peatonal Calle 26',  id: 14},
{text: '238 Postgrados de Ciencias Económicas',  id: 15},
{text: '251 Capilla',  id: 16},
{text: '252 Salida vehicular de la capilla',  id: 17},
{text: '253 Entrada vehicular de la capilla',  id: 18},
{text: '305 Conservatorio de Música',  id: 19},
{text: '310 Facultad de Ciencias Económicas',  id: 20},
{text: '314 Postgrados en Arquitectura - SINDU',  id: 21},
{text: '317 Museo de Arte',  id: 22},
{text: '401 Edificio Julio Garavito Armero, Ingeniería',  id: 23},
{text: '404 Edificio Takeuchi Departamentos de Matemáticas, Física y Estadística',  id: 24},
{text: '405 Postgrados en Matemáticas y Física',  id: 25},
{text: '406 Instituto de Extensión e Investigación IEI',  id: 26},
{text: '408 Laboratorio de Hidráulica - Hangar y CADE Ingeniería', id: 27},
{text: '411 Laboratorios de Ingeniería, Patios',  id: 28},
{text: '412 Laboratorios de Ingeniería Química',  id: 29},
{text: '413 Observatorio Astronómico',  id: 30},
{text: '414 Canchas de Tenis T-2, T-3 y T-4',  id: 31},
{text: '421 Departamento de Biología',  id: 32},
{text: '425 Instituto de Ciencias Naturales',  id: 33},
{text: 'Museo de Historia Natural', id: 34},
{text: '426 Instituto de Genética',  id: 35},
{text: '431 Colegio IPARM Instituto Pedagógico Arturo Ramírez Montúfar',  id: 36},
{text: '450 Departamento de Farmacia',  id: 37},
{text: '451 Departamento de Química',  id: 38},
{text: '453 Aulas de Ingeniería', id: 39},
{text: '454 Edificio de Ciencia y Tecnología CyT',  id: 40},
{text: '471 Facultad de Medicina',  id: 41},
{text: '476 Facultad de Ciencias',  id: 42},
{text: '481 Facultad de Medicina Veterinaria y Zootecnia',  id: 43},
{text: 'La playita',  id: 44},
{text: 'Bosque el Jaguar',  id: 45},
{text: 'Plaza Che',  id: 46},
{text: 'Comedor Central',  id: 47},
{text: 'La Perola', id: 48},
{text: '500 Departamento de Agronomía',  id: 49},
{text: '501 Clínica de Grandes Animales',  id: 50},
{text: '507 Clínica de Pequeños Animales',  id: 51},
{text: '561 Posgrados de Veterinaria y Zootecnia',  id: 52},
{text: '571 Hemeroteca Nacional',  id: 53},
{text: 'Parque Húmboldt',  id: 54},
{text: '603 Portería Calle 45',  id: 55},
{text: '700 Portería Carrera 45',  id: 56},
{text: '701 Departamento de Cine y Televisión',  id: 57},
{text: '731 Estadio de fútbol "Alfonso López Pumarejo"',  id: 58},
{text: '761 Concha Acústica',  id: 59},
{text: '861 Edificio Uriel Gutiérrez',  id: 60},
{text: '862 Unidad Camilo Torres',  id: 61},
{text: '901 Portería Calle 53',  id: 62},
{text: '933 CASE CAN Area de salúd',  id: 63},
{text: '934 Complejo Clínica de Santa Rosa',  id: 64},
];

function findOption(query){
  if(!!query && query != undefined){
    if (query === '') {
      return [];
    }
  
    const regex = new RegExp(`${query.trim()}`, 'i');
    return auto.filter(item => item.text.search(regex) >= 0);
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
  const [date, setDate] = useState('');
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
                newEvent(respuesta.data.id, place_id, title, date, place_detail, details, response.data.link, [2,5]).then(
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
          style={styles.datePickerContainer} //initial date from state
          mode="datetime" //The enum of date, datetime and time
          placeholder="Seleccionar fecha"
          format="DD MMMM YYYY, h:mm a"
          minDate="01-01-2016"
          maxDate= {new Date('01/12/2026')}
          confirmBtnText="Aceptar"
          cancelBtnText="Cancelar"
          date={date }
          iosPickerMode="date"
          androidPickerMode="spinner"
          
         customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              paddingLeft: 10,
            },
            placeholderText:{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 18,
            },
            dateText:{
              color: '#FFF',
              fontSize: 18,
            }
          }}
          onDateChange={setDate}
          
        />
        <View style={styles.autocompleteContainer}>
          <Autocomplete style={styles.AutoStyle}
            data={datos.length === 1 && comp(query, datos[0].text) ? [] : datos}
            keyExtractor={(item) => item.id.toString()}
            defaultValue={query}
            onChangeText={text => setQuery(text)}
            placeholder={"Lugar"}
            containerStyle = {styles.containerStyle}
            inputContainerStyle	 = {styles.inputContainerStyle}
            listContainerStyle={styles.listContainerStyle}
            listStyle={styles.listStyle}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.touchStyle} onPress={() => {setQuery(item.text); setPlaceId(item.id.toString())}}>
                <Text style={styles.itemStyle}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
      </View>    
      <InputText placeholder={"Salón"} value={place_detail} onChangeText={setPlaceDetail} ></InputText>  
      <TextArea placeholder={"Descripción"}  value={details} onChangeText={setDetails}></TextArea>
        <ButtonText name={"Seleccionar imagen"} style={styles.btn} background={'outline'} value={poster} evento={() => _pickImage().then((result) => {if(!result.cancelled){setImageB64(result.base64)}})}></ButtonText>
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