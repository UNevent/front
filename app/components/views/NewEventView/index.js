import React from "react";
import styles  from './styles';
import { SafeAreaView, View, FlatList, Text, ImageBackground, KeyboardAvoidingView, ScrollView } from 'react-native';
import Images from '../../../assets/Images';
import NewEvent from '../../common/NewEvent';
import ButtonText from '../../common/ButtonText';

const NewEventView = ({}) => {
  	return (
  		<ImageBackground source={Images.backmap} style={styles.backmap}>
	  		<KeyboardAvoidingView
		      behavior="padding"
		    >
		    	<ScrollView>
			        <NewEvent></NewEvent>
			        <ButtonText name={"Publicar"}></ButtonText>
		    	</ScrollView>
		    </KeyboardAvoidingView>
	    </ImageBackground>
  	);
};
export default NewEventView;
