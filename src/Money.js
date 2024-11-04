import {
  ERROR_MESSAGES,
  checkValidNumber,
  handleError,
} from './shared/index.js';

class Money {
  static BASE_AMOUNT = 1000;
  #amount;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    checkValidNumber(amount);
    this.#checkValidAmount(amount);
  }

  #checkValidAmount(amount) {
    const isVlidAmount = amount % Money.BASE_AMOUNT === 0;

    handleError(!isVlidAmount, ERROR_MESSAGES.INVALID_AMOUNT);
  }

  get count() {
    return this.#amount / Money.BASE_AMOUNT;
  }

  get amount() {
    return this.#amount;
  }
}

export default Money;
