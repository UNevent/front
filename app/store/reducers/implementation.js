import { AsyncStorage } from 'react-native';
import { useState } from "react";

export function getInitialState(){
	return {
		session: {
			user: "",
			pass: ""
		},
	}
}


export function setAuthData(estado, accion){
	const {user, pass} = accion;

	return {
		...estado,
		session: {
			user,
			pass
		}
	};
}