import React from "react";
import { View, Text } from "react-native";
import styles  from './styles.js';
import InputText from "../../common/InputText/index.js";
import ButtonText from "../../common/ButtonText/index.js";
import ButtonIcon from "../../common/ButtonIcon/index.js";

const NewEventView = ({ goToTreeDetails, points, level, trees }) => {

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
