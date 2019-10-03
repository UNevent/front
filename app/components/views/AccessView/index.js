import React from "react";
import {  View, Text } from "react-native";
import ButtonText from '../../common/ButtonText/index.js'
import styles from './styles.js';

const AccessView = ({ goToTreeDetails, points, level, trees }) => {

  	return (
			<View style={styles.container}>
				<Text style={styles.title}>Bienvenido!</Text>
					<View>					
					<ButtonText name={"Registrarse"}></ButtonText>
					<Text style={styles.description}>Registráte para crear eventos</Text>
					<ButtonText name={"Ya soy UNEventor"}></ButtonText>
					<Text style={styles.description}>Ingresa con tu cuenta</Text>
					<ButtonText name={"Acceder como invitado"} background={'outline'}></ButtonText>
					<Text style={styles.description}>Si sólo quieres ver los eventos</Text>
				</View>
			</View>
  	);
};

export default AccessView;
