export function getTokenAuth(state){
	// retornar token real
	return ('abc');
}

export function getDataAuth(state){
	// retornar datos de usuario
	return state;
}

export function isAuth(state){
	return !!state.session.user && !!state.session.pass;
}
