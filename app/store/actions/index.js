import { AUTH_USER, SAVE_EVENTS_DATA, SAVE_ADITIONAL } from './types';

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

export const saveAditionals = (tags, places) => ({
	type: SAVE_ADITIONAL,
	tags, 
	places,
});