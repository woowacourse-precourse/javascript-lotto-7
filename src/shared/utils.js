import { ERROR_MESSAGES } from './constants.js';

// error handling
export const handleError = (boolean, message) => {
  const formattedMessage = `[ERROR] ${message}`;
  if (boolean) throw Error(formattedMessage);
};

// validation check
export const checkEmpty = (value, message) => {
  handleError(!value, message);
};

export const checkValidNumber = (inputs) => {
  handleError(isNaN(inputs), ERROR_MESSAGES.INVALID_TYPE);
};

export const checkInRange = (min, max, number) => {
  const isNumberInRange = number >= min && number <= max;

  handleError(!isNumberInRange, ERROR_MESSAGES.INVALID_NUMBER_RANGE);
};
