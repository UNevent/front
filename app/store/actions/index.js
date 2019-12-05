import { AUTH_USER, LOAD_DATA } from './types';

export const authenticate = (user, pass) => ({
	type: AUTH_USER,
	user,
	pass,
});

export const loadEvents = (eventsData) => ({
	type: LOAD_DATA,
	eventsData,
}):