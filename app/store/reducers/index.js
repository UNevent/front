import { INCREASE_NUMBER, DECREASE_NUMBER } from '../actions/types';


const initialState = 0;

export default function increaseNumberReducer (estado = initialState, accion){
	switch(accion.type){
		case INCREASE_NUMBER:
			return estado + 1;
		case DECREASE_NUMBER:
			return estado - 1;
		default:
			return estado;
	}
}