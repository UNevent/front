import { validateSession } from '../../components/common/Authentication';

export function getTokenAuth(state){
	return state.session.token;
}

export function getDataAuth(state){
	return state;
}

export function getSession(state){
	return state.session;
}

export async function isAuth(state){
	return validateSession(state.session.token, state.session.client, state.session.user).then(
		(response) => {
			if(response.errors){
				return false;
			}else if(response.success){
				return true;
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
