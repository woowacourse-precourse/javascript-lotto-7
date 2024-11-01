import ERROR_MESSAGES from '../constants/errorMessages.js';

function throwError(message) {
  const errorMessage = `${ERROR_MESSAGES.prefix} ${message}`;
  throw new Error(errorMessage);
}

export default throwError;
