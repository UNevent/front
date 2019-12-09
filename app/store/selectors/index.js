import { validateSession } from '../../components/common/Authentication';

export function getTokenAuth(state){
	return state.session.token;
}

export function getDataAuth(state){
	return state;
}

export function isAuth(state){
	return validateSession(state.session.token, state.session.client, state.session.user).then(
		(response) => {
			if(response.success){
				return true;
			}else{
				return false;
			}
		}
	).catch(
		(error) => {
            return false;
        }
	);
}

export function getEventsData(state){
	return state.eventsData;
}
