import errorMessages from "../constants/errorMessages.js";
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_RANGE,
  LOTTO_PRICE_UNIT,
} from "../constants/lottoConstants.js";

class Validator {
  static validateNumsLength(numbers) {
    this.#validateLength(numbers);
  }

  static validateNumsInRange(numbers) {
    numbers.forEach(this.#checkNumberInRange);
  }

  static validateNumsDuplicate(numbers) {
    this.#checkForDuplicates(numbers);
  }

  static validatePurchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);
    this.#checkPurchaseAmount(amount);
  }

  static #validateLength(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(errorMessages.INVALID_NUMBERS_LENGTH);
    }
  }

  static #checkNumberInRange(num) {
    if (num < LOTTO_NUMBER_RANGE.MIN || num > LOTTO_NUMBER_RANGE.MAX) {
      throw new Error(errorMessages.INVALID_NUMBERS_RANGE);
    }
  }

  static #checkForDuplicates(numbers) {
    if (new Set(numbers).size !== LOTTO_NUMBER_COUNT) {
      throw new Error(errorMessages.INVALID_DUPLICATE_NUMBER);
    }
  }

  static #checkPurchaseAmount(amount) {
    if (isNaN(amount) || amount % LOTTO_PRICE_UNIT !== 0) {
      throw new Error(errorMessages.INVALID_AMOUNT);
    }
  }
}

export default Validator;
