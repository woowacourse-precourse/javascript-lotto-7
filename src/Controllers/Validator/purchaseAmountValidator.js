import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class PurchaseAmountValidator {
  constructor() {
    this.purchaseAmount = 0;
    this.valid = true;
  }

  isValidEmptyInput(purchaseAmount) {
    return purchaseAmount !== '';
  }

  isValidPurchaseAmountUnit(purchaseAmount) {
    const LOTTO_PRICE_UNIT = 1000;
    const parsedPurchaseAmount = Number(purchaseAmount);
    
    return parsedPurchaseAmount % LOTTO_PRICE_UNIT === 0;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!this.isValidEmptyInput(purchaseAmount)) {
      this.valid = false;
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }

    if (!this.isValidPurchaseAmountUnit(purchaseAmount)) {
      this.valid = false;
      throw new Error(ERROR_MESSAGE.INCORRECT_UNIT_PRICE);
    }

    return true;
  }
}

export { PurchaseAmountValidator };
