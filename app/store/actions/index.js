import { AUTH_USER } from './types';

export const authenticate = (user, pass) => ({
	type: AUTH_USER,
	user,
	pass,
});