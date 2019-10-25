import { INCREASE_NUMBER, DECREASE_NUMBER } from './types';


export const incrementarNumero = () => ({
	type: INCREASE_NUMBER,
});

export const decrementarNumero = () => ({
	type: DECREASE_NUMBER,
});