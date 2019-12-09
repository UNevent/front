import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import TextArea from "../TextArea/index";
import Autocomplete from 'react-native-autocomplete-input';

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

const NewEventView = ({}) => {
    const [query, setQuery] = useState('');
    const datos = findOption(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    const auth_selector = useSelector(getDataAuth);

  	return (
      <View style={styles.container}>
        <InputText placeholder={"Nombre evento:"} ></InputText>
        <InputText placeholder={"Fecha"} icon={'event'} style={styles.inputDate}></InputText>

        <InputText placeholder={"Lugar"} icon={'map'}></InputText>
        <InputText placeholder={"Salón"}  ></InputText>
        <TextArea placeholder={"Descripción"}></TextArea>
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
        <ButtonText name={"Seleccionar imagen"} background={'outline'}></ButtonText>
      </View>
  	);
};

export default NewEventView;
