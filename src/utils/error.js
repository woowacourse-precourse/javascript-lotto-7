import { ERROR_PREFIX } from '../constants/messages';

export const formattedError = (errorMessage) => {
	throw new Error(ERROR_PREFIX + ' ' + errorMessage);
};
