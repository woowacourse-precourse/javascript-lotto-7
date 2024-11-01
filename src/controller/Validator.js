import { ERROR_MESSAGE } from '../constants/messages.js';

class Validator {
  static #WINNING_NUMBER_COUNT = 6;
  static #WINNING_NUMBER_MIN = 1;
  static #WINNING_NUMBER_MAX = 6;

  static checkWinningNumbers(numbers) {
    Validator.#checkWinningNumberCount(numbers);
    Validator.#checkWinningNumberDuplicate(numbers);
    Validator.#checkWinningNumberRange(numbers);
  }

  static #checkWinningNumberCount(numbers) {
    if (numbers.length !== Validator.#WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
    }
  }

  static #checkWinningNumberDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBER);
    }
  }

  static #checkWinningNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < Validator.#WINNING_NUMBER_MIN ||
        number > Validator.#WINNING_NUMBER_MAX
      ) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER_COUNT);
      }
    });
  }
}

export default Validator;
