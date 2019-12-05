import { AsyncStorage } from 'react-native';

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

export function setEventsData(estado, accion){
	const {eventsData} = accion;

	return {
		...estado,
		eventsData,
	}
}