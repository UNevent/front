import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import TextArea from "../TextArea/index";
import Autocomplete from 'react-native-autocomplete-input';
import DatePicker from 'react-native-datepicker';
import {newEvent} from '../Events/Create'; 

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
    const [place_id, setPlaceId] = useState('');
    const [place_detail, setPlaceDetail] = useState('');
    const [details, setDetails] = useState('');
    const [poster, setPoster] = useState('');

    

    const datos = findOption(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    const createEvent = () => {
      if(title != ''){
        newEvent(1, 2, title, date.toString(), place_detail, details, poster, [2,5]).then(
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

  	return (
      <View style={styles.container}>
        <InputText placeholder={"Nombre evento:"} value={title} onChangeText={setTitle}></InputText>
        <DatePicker
          style={{width: 200}} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 200
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
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
