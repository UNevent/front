import {AsyncStorage} from 'react-native';
import { useState } from "react";

async function getUser(){
	return await AsyncStorage.getItem('usr');
}

async function getPass(){
	return await AsyncStorage.getItem('pw');
}

export function getInitialState(){
	return {
		session: {
			user: getUser(),
			pass: getPass()
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