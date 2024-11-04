import { ERROR_MESSAGE } from "./constants/error.js";
import { LOTTO_PRICE } from "./constants/lotto.js";

class PurchaseAmount {
  #amount;
  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    this.#validateNumber(amount);
    this.#validateMinAmount(amount);
    this.#validateDivisibleAmount(amount);
  }

  #validateNumber(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

  #validateMinAmount(amount) {
    if (amount < LOTTO_PRICE) {
      throw new Error(ERROR_MESSAGE.MIN_AMOUNT);
    }
  }

  #validateDivisibleAmount(amount) {
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.DIVISIBLE_AMOUNT);
    }
  }

  getAmount() {
    return this.#amount / LOTTO_PRICE;
  }
}

export default PurchaseAmount;