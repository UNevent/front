import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles.js';
import backmap from '../../../assets/backmap.png';
import unlogo from '../../../assets/unlogo.png';
import RegisterView from "../RegisterView/index.js";

const AccessBackgroundView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
	    <ImageBackground source={backmap} style={styles.backmap}>
	    	<View style={styles.container}>
          <Image source={unlogo} style={styles.logo}></Image>
	    		<Text style={styles.title}>UNEvent</Text>
					<RegisterView></RegisterView>
	    	</View>
	    </ImageBackground>
  	);
};

export default AccessBackgroundView;
