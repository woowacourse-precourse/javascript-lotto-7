import { ERROR_PREFIX } from '../constant/constants.js';

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
