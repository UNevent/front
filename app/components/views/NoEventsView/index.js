import React from "react";
import styles  from './styles';
import { View, ImageBackground, Image, Text } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import ButtonIcon from "../../common/ButtonIcon";

const NoEventsView = ({ goToNewEvent }) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
          <View style={styles.container}>
            <Image source={Images.unLogo} style={styles.logo}></Image>
            <Text style={styles.title}>No hay eventos disponibles</Text>
          </View>
          <View style={styles.buttonew}>
            <ButtonIcon icon={'plus-circle'} size={50} evento={goToNewEvent}></ButtonIcon>
          </View>
      </ImageBackground>

  	);
};
export default NoEventsView;
