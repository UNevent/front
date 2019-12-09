import { AUTH_USER, SAVE_EVENTS_DATA } from '../actions/types';
import { getInitialState, setAuthData, setEventsData } from './implementation'

const initialState = getInitialState();

export default function sessionReducer (estado = initialState, accion){
	switch(accion.type){
		case AUTH_USER:
			return setAuthData(estado, accion);
		case SAVE_EVENTS_DATA:
			return setEventsData(estado, accion);
		default:
			return estado;
	}
}