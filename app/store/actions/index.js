import { AUTH_USER, SAVE_EVENTS_DATA } from './types';

export const authenticate = (user, pass) => ({
	type: AUTH_USER,
	user,
	pass,
});

export const saveEvents = (eventsData) => ({
	type: SAVE_EVENTS_DATA,
	eventsData,
});