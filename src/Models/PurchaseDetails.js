import validator from '../Validators/Validator.js';
import { PURCHASE_AMOUNT_RULES } from '../Validators/Rules.js';
import InputParser from './InputParser.js';

class PurchaseDetails {
  #purchaseAmount;
  #purchaseCount;

  constructor(purchaseAmountInput) {
    const purchaseAmount = this.#parser(purchaseAmountInput);
    this.#validate(purchaseAmount);

    this.#purchaseAmount = purchaseAmount;
    this.#purchaseCount = Math.floor(purchaseAmount / 1000);
  }

  #parser(purchaseAmountInput) {
    const purchaseAmount = InputParser.number(purchaseAmountInput);
    return purchaseAmount;
  }

  #validate(purchaseAmount) {
    validator(purchaseAmount, PURCHASE_AMOUNT_RULES);
  }

  get detail() {
    const detail = {
      purchaseAmount: this.#purchaseAmount,
      purchaseCount: this.#purchaseCount,
    };

    return detail;
  }
}

export default PurchaseDetails;
