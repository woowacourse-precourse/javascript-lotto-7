import { ERROR_MESSAGE } from './errorMessages.js';

const checkPurchasePriceUnit = (purchasePriceInput) => {
  const LOTTO_PRICE_UNIT = 1000;
  const NumberOfPurchasePriceInput = Number(purchasePriceInput);

  return NumberOfPurchasePriceInput % LOTTO_PRICE_UNIT === 0;
};

const validatePurchasePrice = (purchasePriceInput) => {
  if (!checkPurchasePriceUnit(purchasePriceInput)) {
    throw new Error(ERROR_MESSAGE.INCORRECT_UNIT_PRICE);
  }
};
export { validatePurchasePrice };
