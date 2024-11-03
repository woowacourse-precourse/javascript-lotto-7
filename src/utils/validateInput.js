import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

export const validatePurchaseAmount = (purchaseAmount) => {
  if (typeof purchaseAmount !== 'number' || Number.isNaN(purchaseAmount)) {
    throw new CustomError(ERROR.INVALID_NUMBER_TYPE);
  }

  if (purchaseAmount % 1000 !== 0) {
    throw new CustomError(ERROR.INVALID_PURCHASE_AMOUNT);
  }
};
