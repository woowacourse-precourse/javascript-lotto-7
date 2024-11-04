import ERROR from '../constants/error.js';
import CustomError from './CustomError.js';

const validateNotEmpty = (purchaseAmountString) => {
  if (purchaseAmountString === '') {
    throw new CustomError(ERROR.EMPTY_INPUT);
  }
};

const validateAmountType = (purchaseAmountString) => {
  if (Number.isNaN(purchaseAmountString)) {
    throw new CustomError(ERROR.INVALID_NUMBER_TYPE);
  }
};

const validateAmountUnit = (purchaseAmountString) => {
  if (purchaseAmountString % 1000 !== 0) {
    throw new CustomError(ERROR.INVALID_PURCHASE_AMOUNT);
  }
};

export const validatePurchaseAmount = (purchaseAmountString) => {
  validateNotEmpty(purchaseAmountString);
  const purchaseAmount = parseInt(purchaseAmountString, 10);
  validateAmountType(purchaseAmount);
  validateAmountUnit(purchaseAmount);
  return purchaseAmount;
};
