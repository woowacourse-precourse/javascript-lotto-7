import { ERROR_MESSAGE } from '../constants/messages.js';

class Validator {
  static #WINNING_NUMBER_COUNT = 6;
  static #WINNING_NUMBER_MIN = 1;
  static #WINNING_NUMBER_MAX = 6;

  static validateWinningNumbers(numbers) {
    Validator.#validateNumberCount(numbers);
    Validator.#validateNoDuplicateNumber(numbers);
    Validator.#validateNumberRange(numbers);
  }

  static #validateNumberCount(numbers) {
    if (numbers.length !== Validator.#WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NUMBER_COUNT);
    }
  }

  static #validateNoDuplicateNumber(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }
  }

  static #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < Validator.#WINNING_NUMBER_MIN ||
        number > Validator.#WINNING_NUMBER_MAX
      ) {
        throw new Error(ERROR_MESSAGE.NUMBER_RANGE);
      }
    });
  }
}

export default Validator;
