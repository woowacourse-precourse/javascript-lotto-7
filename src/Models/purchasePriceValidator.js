import { ERROR_MESSAGE } from './errorMessages.js';

const isPurchasePriceEmptyInput = (purchasePriceInput) => purchasePriceInput !== '';

const isValidPurchasePriceUnit = (purchasePriceInput) => {
  const LOTTO_PRICE_UNIT = 1000;
  const purchasePrice = Number(purchasePriceInput);

  return purchasePrice % LOTTO_PRICE_UNIT === 0;
};

const validatePurchasePrice = (purchasePriceInput) => {
  if (!isPurchasePriceEmptyInput(purchasePriceInput)) {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  }

  if (!isValidPurchasePriceUnit(purchasePriceInput)) {
    throw new Error(ERROR_MESSAGE.INCORRECT_UNIT_PRICE);
  }
};
export { validatePurchasePrice };
