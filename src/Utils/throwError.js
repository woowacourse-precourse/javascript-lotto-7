import Errors from '../Constants/Errors.js';

const throwError = (message) => {
  throw new Error(`${Errors.PREFIX} ${message}`);
};

export default throwError;
