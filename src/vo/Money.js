import { LOTTO, ERROR_MESSAGES } from '../constant/constant.js';
import {
  throwValidationError,
  checkIsEmpty,
  checkIsNumber,
} from '../utils/validation.js';

class Money {
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  getAmount() {
    return this.#amount;
  }

  #validate(amount) {
    checkIsEmpty(amount);
    checkIsNumber(amount);

    const parsedAmount = Number(amount);
    this.#checkDivisibility(amount);
    this.#checkMinAmount(parsedAmount);
  }

  #checkMinAmount(amount) {
    if (amount < LOTTO.PRICE) {
      throwValidationError(ERROR_MESSAGES.UNDER_LOTTO_PRICE);
    }
  }

  #checkDivisibility(amount) {
    if (amount % LOTTO.PRICE !== 0) {
      throwValidationError(ERROR_MESSAGES.NOT_DIVISIBLE);
    }
  }
}

export default Money;
