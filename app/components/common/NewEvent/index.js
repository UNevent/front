import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import InputText from "../InputText/index";
import ButtonText from "../ButtonText/index";
import ButtonIcon from "../ButtonIcon/index";

const NewEventView = ({}) => {

  	return (
      <View style={styles.container}>
        <View>
          <InputText placeholder={"Nombre evento:"} ></InputText>
          <InputText placeholder={"Fecha"}></InputText>
          <ButtonIcon icon={'calendar'} ></ButtonIcon>
          <View>
            <InputText placeholder={"Lugar"} ></InputText>
            <ButtonIcon icon={'map-marker'} ></ButtonIcon>
            <InputText placeholder={"Salón"}  ></InputText>
          </View>
        <ButtonText name={"Seleccionar imagen"} background={'outline'}></ButtonText>
        </View>
        <ButtonText name={"Publicar"}></ButtonText>
      
      </View>
  	);
};

export default NewEventView;
