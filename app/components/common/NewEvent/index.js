import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import TextArea from "../TextArea/index";

const NewEventView = ({}) => {

  	return (
      <View style={styles.container}>
        
          <InputText placeholder={"Nombre evento:"} ></InputText>
          <InputText placeholder={"Fecha"} icon={'calendar'} style={styles.inputDate}></InputText>
          
          <View>
            <InputText placeholder={"Lugar"} icon={'map-marker'}></InputText>

            <InputText placeholder={"Salón"}  ></InputText>
          </View>
          <TextArea placeholder={"Descripción"}></TextArea>
        <ButtonText name={"Seleccionar imagen"} background={'outline'}></ButtonText>
        
      
      </View>
  	);
};

export default NewEventView;
