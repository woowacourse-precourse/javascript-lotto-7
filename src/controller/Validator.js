import { ERROR_MESSAGE } from '../constants/messages.js';
import { parseNumbers } from '../utils/Parser.js';

class Validator {
  static #WINNING_NUMBER_COUNT = 6;
  static #NUMBER_MIN = 1;
  static #NUMBER_MAX = 45;
  static #BONUS_NUMBER_MIN_LENGTH = 1;
  static #EMPTY_STRING = '';
  static #PURCHASE_AMOUNT_MIN = 1000;
  static #PURCHASE_AMOUNT_MAX = 1000000;
  static #PURCHASE_DIVISION_UNIT = 1000;

  constructor() {}

  static checkLottoNumbers(numbers) {
    Validator.#checkLottoNumbersCount(numbers);
    Validator.#checkLottoNumbersDuplicate(numbers);
    Validator.#checkLottoNumbersRange(numbers);
  }

  static checkBonusNumber(bonusNumber) {
    Validator.#checkBonusNumberEmptyInput(bonusNumber);
    Validator.#checkBonusNumberCount(bonusNumber);
    Validator.#checkBonusNumberRange(bonusNumber);
  }

  static checkBonusNumberDuplicate(numbers, bonusNumber) {
    numbers = parseNumbers(numbers);
    bonusNumber = Number(bonusNumber);
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_DUPLICATE);
    }
  }

  static checkPurchaseAmount(amount) {
    Validator.#checkPurchaseAmountEmptyInput(amount);
    Validator.#checkPurchaseAmountRange(amount);
    Validator.#checkPurchaseAmountPositive(amount);
  }

  static #checkLottoNumbersCount(numbers) {
    numbers = parseNumbers(numbers);
    if (numbers.length !== Validator.#WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  static #checkLottoNumbersDuplicate(numbers) {
    numbers = parseNumbers(numbers);
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_DUPLICATE);
    }
  }

  static #checkLottoNumbersRange(numbers) {
    numbers = parseNumbers(numbers);
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
    if (!number || number.trim() === Validator.#EMPTY_STRING) {
      throw new Error(ERROR_MESSAGE.INVALID_EMPTY_BONUS_NUMBER);
    }
  }

  static #checkBonusNumberCount(number) {
    number = parseNumbers(number);
    if (number.length > Validator.#BONUS_NUMBER_MIN_LENGTH) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  static #checkBonusNumberRange(number) {
    number = Number(number);
    if (
      !Number.isInteger(number) ||
      number < Validator.#NUMBER_MIN ||
      number > Validator.#NUMBER_MAX
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
  }

  static #checkPurchaseAmountEmptyInput(amount) {
    if (!amount || amount.trim() === Validator.#EMPTY_STRING) {
      throw new Error(ERROR_MESSAGE.INVALID_EMPTY_PURCHASE_AMOUNT);
    }
  }

  static #checkPurchaseAmountRange(amount) {
    const price = Number(amount);
    if (
      price < Validator.#PURCHASE_AMOUNT_MIN ||
      price > Validator.#PURCHASE_AMOUNT_MAX
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_RANGE);
    }
  }

  static #checkPurchaseAmountPositive(amount) {
    const price = Number(amount);
    if (!Number.isInteger(price / Validator.#PURCHASE_DIVISION_UNIT)) {
      throw new Error(
        ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_DIVISIBLE_BY_THOUSAND
      );
    }
  }
}

export default Validator;
