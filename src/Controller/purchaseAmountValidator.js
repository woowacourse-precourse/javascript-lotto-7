import { LOTTO_AMOUNT } from '../Constant/constants.js';
import { ERROR_MESSAGES } from '../Constant/errorMessages.js';


export class PurchaseAmountValidator {
  constructor() {
    this.purchaseAmount = 0;
  }

  isValidEmptyInput() {
    return this.purchaseAmount !== '';
  }

  isValidPurchaseAmountUnit() {
    const parsedPurchaseAmount = Number(this.purchaseAmount);

    return parsedPurchaseAmount % LOTTO_AMOUNT.UNIT === 0 && parsedPurchaseAmount > 0;
  }

  getValidationRules() {
    return [
      [!this.isValidEmptyInput(), ERROR_MESSAGES.purchaseAmount.EMPTY_INPUT],
      [!this.isValidPurchaseAmountUnit(), ERROR_MESSAGES.purchaseAmount.UNIT_PRICE],
    ];
  }

  validatePurchaseAmount(purchaseAmount) {
    this.purchaseAmount = purchaseAmount;
    const validationRules = this.getValidationRules();

    validationRules.forEach((arr) => {
      if (arr[0]) throw new Error(arr[1]);
    });

    return true;
  }
}
