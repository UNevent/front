import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Access from "../../common/Access";
import Images from '../../../assets/Images';

const AccessView = ({ goToRegister, goToLogin }) => {
  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<View style={styles.container}>
          	<Image source={Images.unLogo} style={styles.logo}></Image>
	    		<Text style={styles.title}>UNEvent</Text>
				<Access registrar={goToRegister} ingresar={goToLogin}></Access>
	    	</View>
	    </ImageBackground>
  	);
};

AccessView.propTypes = {
  goToRegister: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default AccessView;
