import { AUTH_USER } from '../actions/types';
import { getInitialState, setAuthData } from './implementation'

const initialState = getInitialState();

export default function increaseNumberReducer (estado = initialState, accion){
	switch(accion.type){
		case AUTH_USER:
			return setAuthData(estado, accion);
		default:
			return estado;
	}
}