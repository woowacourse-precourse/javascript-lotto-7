import ERROR_MESSAGES from '../constant/error.js';

const MODE = Object.freeze({
  PURCHASE_AMOUNT: 'purchaseAmount',
});

const isNumber = (value) => {
  if (isNaN(value)) {
    throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
  }
};

const isWrongUnit = (value) => {
  if (value % 1000 !== 0) {
    throw new Error(ERROR_MESSAGES.WRONG_UNIT);
  }
};

const isInRange = (value, mode) => {
  if (mode === MODE.PURCHASE_AMOUNT && (value < 1000 || value > 100000)) {
    throw new Error(ERROR_MESSAGES.WRONG_RANGE.PURCHASE_AMOUNT);
  }
};

export const validatePurchaseAmount = (value) => {
  const purchaseAmount = Number(value);

  isNumber(purchaseAmount);
  isWrongUnit(purchaseAmount);
  isInRange(purchaseAmount, MODE.PURCHASE_AMOUNT);
};
