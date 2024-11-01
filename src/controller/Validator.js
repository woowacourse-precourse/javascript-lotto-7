import { ERROR_MESSAGE } from '../constants/messages.js';
import { parseNumbers } from '../utils/Parser.js';

class Validator {
  static #WINNING_NUMBER_COUNT = 6;
  static #NUMBER_MIN = 1;
  static #NUMBER_MAX = 45;
  static #BONUS_NUMBER_EMPTY_STRING = '';
  static #BONUS_NUMBER_MIN_LENGTH = 1;
  static #WINNING_NUMBERS;

  constructor() {}

  static checkWinningNumbers(numbers) {
    Validator.#checkWinningNumberCount(numbers);
    Validator.#checkWinningNumberDuplicate(numbers);
    Validator.#checkWinningNumberRange(numbers);
    Validator.#WINNING_NUMBERS = numbers;
  }

  static checkBonusNumber(bonusNumber) {
    Validator.#checkBonusNumberEmptyInput(bonusNumber);
    Validator.#checkBonusNumberCount(bonusNumber);
    Validator.#checkBonusNumberRange(bonusNumber);
    Validator.#checkBonusNumberDuplicate(bonusNumber);
  }

  static #checkWinningNumberCount(numbers) {
    if (numbers.length !== Validator.#WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  static #checkWinningNumberDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_DUPLICATE);
    }
  }

  static #checkWinningNumberRange(numbers) {
    numbers.forEach((number) => {
      if (
        !Number.isInteger(number) ||
        number < Validator.#NUMBER_MIN ||
        number > Validator.#NUMBER_MAX
      ) {
        throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
      }
    });
  }

  static #checkBonusNumberEmptyInput(number) {
    if (!number || number.trim() === Validator.#BONUS_NUMBER_EMPTY_STRING) {
      throw new Error(ERROR_MESSAGE.INVALID_EMPTY_BONUS_NUMBER);
    }
  }

  static #checkBonusNumberCount(number) {
    const bonusNumber = parseNumbers(number);
    if (bonusNumber.length > Validator.#BONUS_NUMBER_MIN_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  static #checkBonusNumberRange(number) {
    if (
      !Number.isInteger(number) ||
      number < Validator.#NUMBER_MIN ||
      number > Validator.#NUMBER_MAX
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  static #checkBonusNumberDuplicate(bonusNumber) {
    if (Validator.#WINNING_NUMBERS.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default Validator;
