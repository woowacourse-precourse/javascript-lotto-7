import { PURCHASE_UNIT, ErrorMessage } from '../../resources/Constants.js';

function validatePositiveNumber(purchaseAmount) {
  const isPositiveNumber = !Number.isNaN(purchaseAmount) && purchaseAmount > 0;

  if (!isPositiveNumber) {
    throw new Error(ErrorMessage.PRICE_AMOUNT_IS_NEGATIVE);
  }
}

function validatePurchaseUnit(purchaseAmount) {
  const isValidPurchaseUnit = purchaseAmount % PURCHASE_UNIT === 0;

  if (!isValidPurchaseUnit) {
    throw new Error(ErrorMessage.INVALID_PURCHASE_UNIT);
  }
}

export default function purchaseAmountValidator(purchaseAmount) {
  validatePositiveNumber(purchaseAmount);
  validatePurchaseUnit(purchaseAmount);
}
