import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

export const validateAmountType = (purchaseAmount) => {
  if (typeof purchaseAmount !== 'number' || Number.isNaN(purchaseAmount)) {
    throw new CustomError(ERROR.INVALID_NUMBER_TYPE);
  }
};

export const validateAmountUnit = (purchaseAmount) => {
  if (purchaseAmount % 1000 !== 0) {
    throw new CustomError(ERROR.INVALID_PURCHASE_AMOUNT);
  }
};

export const validatePurchaseAmount = (purchaseAmount) => {
  validateAmountType(purchaseAmount);
  validateAmountUnit(purchaseAmount);
};
