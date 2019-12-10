import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import TextArea from "../TextArea/index";
import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-datepicker';
import {newEvent} from '../Events/Create'; 

import { useSelector, useDispatch } from 'react-redux';
import { getDataAuth } from '../../../store/selectors';

const auto = [
  {
    id: 1,
    text: 't1'
  },
  {
    id: 2,
    text: 't2'
  },
  {
    id: 3,
    text: 't3'
  }
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

const NewEventView = ({create}) => {
    const [query, setQuery] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [place_id, setPlaceId] = useState('');
    const [place_detail, setPlaceDetail] = useState('');
    const [details, setDetails] = useState('');
    const [poster, setPoster] = useState('');

    const datos = findOption(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    const createEvent = () => {
      if(title != '' && date != ''){
        newEvent(1, 2, title, date, place_detail, details, poster, [2,5]).then(
          (response) =>{
            if(!response.success){
              if(response.data){
                Alert.alert(title)
              }else{
                Alert.alert(
                  'El nombre del evento es requerido',
                  [
                    {text: 'OK', onPress: () => console.log('ok')},
                  ],
                  {cancelable: false},
                );
              }
            }
          }
        );
      }
      
    }

    const auth_selector = useSelector(getDataAuth);

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
        <Autocomplete
            data={datos.length === 1 && comp(query, datos[0].text) ? [] : datos}
            defaultValue={query}
            onChangeText={text => setQuery(text)}
            placeholder={"Sitio"}
            renderItem={({ item }) => (
              <TouchableOpacity key={item.id} onPress={() => {setQuery(item.text)}}>
                <Text>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        <ButtonText name={"Seleccionar imagen"} background={'outline'} value={poster} onChangeText={setDetails}></ButtonText>
        <ButtonText name={"Publicar"}  evento={createEvent}></ButtonText>
      </View>
  	);
};

export default NewEventView;