import { CONFIG } from '../constants/constants.js';
import { ERROR_MESSAGES } from '../constants/messages.js';

const isValidPurchaseUnit = (amount, unit) => amount % unit === 0;
const isPositiveNumber = (value) => !Number.isNaN(value) && value > 0;

export const validatePurchaseAmount = (amount) => {
  if (!isPositiveNumber(amount)) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
  }
  if (!isValidPurchaseUnit(amount, CONFIG.PURCHASE_AMOUNT_UNIT)) {
    throw new Error(ERROR_MESSAGES.INVALID_UNIT);
  }
};
