import ErrorMessages from '../Constants/ErrorMessages.js';
import OutputPrint from '../Views/OutputPrint.js';

export const throwError = (message) => {
  throw new Error(`${ErrorMessages.PREFIX} ${message}`);
};

export const printErrorAndFalse = (message) => {
  OutputPrint.error(message);
  OutputPrint.blankLine();
  return false;
};
