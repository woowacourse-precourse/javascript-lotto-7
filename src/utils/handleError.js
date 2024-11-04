import ERROR_MESSAGES from '../constants/errorMessages.js';

const handleError = (message) => {
  throw new Error(`${ERROR_MESSAGES.PREFIX} ${message}\n`);
};

export default handleError;
