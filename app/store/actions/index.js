import { AUTH_USER, SAVE_EVENTS_DATA } from './types';

export const authenticate = (user, pass, client, token) => ({
	type: AUTH_USER,
	user,
	pass,
	client,
	token,
});

export const saveEvents = (eventsData) => ({
	type: SAVE_EVENTS_DATA,
	eventsData,
});