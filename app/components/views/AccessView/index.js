import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
//import styles from '../../../assets/styles/general/styles';
import styles  from './styles';
import Access from "../../common/Access";
import ButtonText from "../../common/ButtonText";
import Images from '../../../assets/Images';


import { useSelector, useDispatch } from 'react-redux';
import { getNumber } from '../../../store/selectors';
import { incrementarNumero, decrementarNumero } from '../../../store/actions';


const AccessView = ({ goToRegister, goToLogin, goInvited }) => {
	const numero = useSelector(getNumber);
	const dispatch = useDispatch();

	const aumentar = () => dispatch(incrementarNumero());
	const restar = () => dispatch(decrementarNumero());

  	return (
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
	    	<View style={styles.container}>
          	<Image source={Images.unLogo} style={styles.logo}></Image>
	    		<Text style={styles.title}>UNEvent</Text>
				<Access registrar={goToRegister} ingresar={goToLogin} invitar={goInvited}></Access>
	    	</View>
	    </ImageBackground>
  	);
};

AccessView.propTypes = {
  goToRegister: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
};

export default AccessView;
