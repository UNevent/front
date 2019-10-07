import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Login from "../../common/Login";
import Images from '../../../assets/Images';

const LoginView = ({ goHome }) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<ScrollView>
	    		<View style={styles.container}>
	          		<Image source={Images.unLogo} style={styles.logo}></Image>
		    		<Text style={styles.title}>UNEvent</Text>
					<Login ingresar={goHome}></Login>
		    	</View>
	    	</ScrollView >
	    </ImageBackground>
  	);
};

export default LoginView;
