import { AUTH_USER, LOAD_DATA } from '../actions/types';
import { getInitialState, setAuthData, setEventsData } from './implementation'

const initialState = getInitialState();

export default function sessionReducer (estado = initialState, accion){
	switch(accion.type){
		case AUTH_USER:
			return setAuthData(estado, accion);
		case LOAD_DATA:
			return setEventsData(estado, accion);
		default:
			return estado;
	}
}