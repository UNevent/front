import { AUTH_USER, SAVE_EVENTS_DATA, SAVE_ADITIONAL } from '../actions/types';
import { getInitialState, setAuthData, setEventsData, setAditionals } from './implementation'

const initialState = getInitialState();

export default function sessionReducer (estado = initialState, accion){
	switch(accion.type){
		case AUTH_USER:
			return setAuthData(estado, accion);
		case SAVE_EVENTS_DATA:
			return setEventsData(estado, accion);
		case SAVE_ADITIONAL:
			return setAditionals(estado, accion);
		default:
			return estado;
	}
}