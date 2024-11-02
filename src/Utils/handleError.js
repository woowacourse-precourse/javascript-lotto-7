import Errors from '../Constants/Errors.js';
import OutputPrint from '../Views/OutputPrint.js';

export const throwError = (message) => {
  throw new Error(`${Errors.PREFIX} ${message}`);
};

export const printErrorAndFalse = (message) => {
  OutputPrint.error(message);
  return false;
};
