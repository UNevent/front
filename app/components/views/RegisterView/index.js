import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Register from "../../common/Register";
import Images from '../../../assets/Images';

const RegisterView = ({}) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<ScrollView>
	    		<View style={styles.container}>
	          	<Image source={Images.unLogo} style={styles.logo}></Image>
		    		<Text style={styles.title}>UNEvent</Text>
					<Register></Register>
		    	</View>
	    	</ScrollView>
	    </ImageBackground>
  	);
};

export default RegisterView;
