import { AsyncStorage } from 'react-native';

export function getInitialState(){
	return {
		session: {
			user: "",
			pass: "",
			client: "",
			token: "",
		},
	}
}

export function setAuthData(estado, accion){
	const {user, pass, client, token} = accion;

	return {
		...estado,
		session: {
			user,
			pass,
			client,
			token,
		}
	};
}

export function setEventsData(estado, accion){
	const {eventsData} = accion;

	return {
		...estado,
		eventsData,
	}
}