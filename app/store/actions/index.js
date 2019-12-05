import { AUTH_USER, SAVE_SESSION } from './types';

export const authenticate = (user, pass) => ({
	type: AUTH_USER,
	user,
	pass,
});