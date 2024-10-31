import { ERROR_MESSAGES } from './constants.js';
import { checkValidNumber, handleError } from './utils.js';

class Money {
  static BASE_AMOUNT = 1000;
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    checkValidNumber(amount, ERROR_MESSAGES.INVALID_TYPE);
    this.#checkValidAmount(amount);
  }

  #checkValidAmount(amount) {
    const isVlidAmount = amount % Money.BASE_AMOUNT === 0;

    handleError(!isVlidAmount, ERROR_MESSAGES.INVALID_AMOUNT);
  }

  getCount() {
    return this.#amount / Money.BASE_AMOUNT;
  }
}

export default Money;
