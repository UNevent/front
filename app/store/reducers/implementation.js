import {AsyncStorage} from 'react-native';
import { useState } from "react";

export function getInitialState(){
	/*const [user, setUser] = useState('');

	async function _getPassValue() {
	  var value = await AsyncStorage.getItem('pw');
	  return value;
	}

	async function _getUserValue() {
	  var value = await AsyncStorage.getItem('usr');
	  return value;
	}

	return {
		session: {
			user: _getUserValue(),
			pass: _getPassValue()
		},
	}*/
	return {
		session: {
			user: 'abc',
			pass: 'abc123'
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