import { ERROR_MESSAGE } from './constant.js';

/**
 *
 */
export const validateAmount = (amount) => {
  if (isNaN(amount)) {
    throw new Error(ERROR_MESSAGE.AMOUNT_NOT_NUMBER);
  }
};
