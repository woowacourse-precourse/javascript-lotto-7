import {
  isGreaterThan,
  isDivisibleByDivisor
} from '../../util/ValidateUtil.js';
import CommonValidator from './CommonValidator.js';
import { ERROR_MESSAGE } from '../constants/Message.js';

class PurchaseAmountValidator extends CommonValidator {

  #unitAmount;

  #maxAmount;

  constructor(unitAmount, maxAmount) {
    super();

    this.#unitAmount = unitAmount;
    this.#maxAmount = maxAmount;
  }


  validatePurchaseAmount = (amount) => {
    super.checkValidInput(amount);
    super.validateNumericInput(amount);

    this.#checkValidAmount(amount);
  }

  #checkValidAmount = (amount) => {
    if (isGreaterThan(amount, this.#maxAmount)) {
      throw new Error(ERROR_MESSAGE.ERROR_MAX_PURCHASE_AMOUNT_EXCEEDED(this.#maxAmount, amount));
    }

    if (!isDivisibleByDivisor(amount, this.#unitAmount)) {
      throw new Error(ERROR_MESSAGE.ERROR_INCORRECT_AMOUNT_UNIT(amount, this.#unitAmount));
    }
  }
}

export default PurchaseAmountValidator;