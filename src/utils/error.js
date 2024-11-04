import { ERROR_PREFIX } from '../constants/messages.js';

export const formattedError = (errorMessage) => {
	throw new Error(ERROR_PREFIX + ' ' + errorMessage);
};
