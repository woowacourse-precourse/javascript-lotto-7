import { ERROR_MESSAGES } from '../../Constants/errorMessages.js';

class PurchaseAmountValidator {
  constructor() {
    this.purchaseAmount = 0;
  }

  isValidEmptyInput() {
    return this.purchaseAmount !== '';
  }

  isValidPurchaseAmountUnit() {
    const LOTTO_PRICE_UNIT = 1000;
    const parsedPurchaseAmount = Number(this.purchaseAmount);

    return parsedPurchaseAmount % LOTTO_PRICE_UNIT === 0 && parsedPurchaseAmount > 0;
  }

  validatePurchaseAmount(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    if (!this.isValidEmptyInput()) {
      throw new Error(ERROR_MESSAGES.purchaseAmount.EMPTY_INPUT);
    }

    if (!this.isValidPurchaseAmountUnit()) {
      throw new Error(ERROR_MESSAGES.purchaseAmount.UNIT_PRICE);
    }

    return true;
  }
}

export { PurchaseAmountValidator };
