export function getTokenAuth(state){
	// retornar token real
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

export function getDataAuth(state){
	// retornar datos de usuario
	return state;
}

export function isAuth(state){
	return !!state.session.user && !!state.session.pass;
}

export function getEventsData(state){
	return state.eventsData;
}
