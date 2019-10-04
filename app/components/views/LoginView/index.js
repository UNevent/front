import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Login from "../../common/Login";
import Images from '../../../assets/Images';

const LoginView = ({}) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<View style={styles.container}>
          	<Image source={Images.unLogo} style={styles.logo}></Image>
	    		<Text style={styles.title}>UNEvent</Text>
				<Login></Login>
	    	</View>
	    </ImageBackground>
  	);
};

export default LoginView;
