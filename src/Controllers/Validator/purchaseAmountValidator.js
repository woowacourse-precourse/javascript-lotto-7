import { ERROR_MESSAGE } from '../../Constants/errorMessages.js';

class PurchaseAmountValidator {
  constructor(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
  }

  isPurchaseAmountEmptyInput() {
    return this.purchaseAmount !== '';
  }

  isValidPurchaseAmountUnit() {
    const LOTTO_PRICE_UNIT = 1000;
    const parsedPurchaseAmount = Number(this.purchaseAmount);

    return parsedPurchaseAmount % LOTTO_PRICE_UNIT === 0;
  }

  validatePurchaseAmount() {
    if (!this.isPurchaseAmountEmptyInput(this.purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }

    if (!this.isValidPurchaseAmountUnit(this.purchaseAmount)) {
      throw new Error(ERROR_MESSAGE.INCORRECT_UNIT_PRICE);
    }
  }
}

export { PurchaseAmountValidator };