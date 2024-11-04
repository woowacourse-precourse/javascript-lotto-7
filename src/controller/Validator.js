import { ERROR_MESSAGE } from '../constants/messages.js';

class Validator {
  static #WINNING_NUMBER_COUNT = 6;
  static #NUMBER_MIN = 1;
  static #NUMBER_MAX = 45;
  static #BONUS_NUMBER_MIN_LENGTH = 1;
  static #EMPTY_STRING = '';
  static #PURCHASE_AMOUNT_MIN = 1000;
  static #PURCHASE_AMOUNT_MAX = 1000000;
  static #PURCHASE_DIVISION_UNIT = 1000;

  static checkLottoNumbers(numbers) {
    Validator.#checkLottoNumbersCount(numbers);
    Validator.#checkLottoNumbersDuplicate(numbers);
    Validator.#checkLottoNumbersRange(numbers);
  }

  static checkBonusNumber(bonusNumber) {
    if (typeof bonusNumber !== 'number') {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_RANGE);
    }
    Validator.#checkBonusNumberEmptyInput(bonusNumber);
    Validator.#checkBonusNumberRange(bonusNumber);
  }

  static checkBonusNumberDuplicate(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_DUPLICATE);
    }
  }

  static checkPurchaseAmount(amount) {
    Validator.#checkPurchaseAmountEmptyInput(amount);
    Validator.#checkPurchaseAmountRange(amount);
    Validator.#checkPurchaseAmountDivisibleByThousand(amount);
  }

  static #checkLottoNumbersCount(numbers) {
    if (numbers.length !== Validator.#WINNING_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_COUNT);
    }
  }

  static #checkLottoNumbersDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_DUPLICATE);
    }
  }

  static #checkLottoNumbersRange(numbers) {
    numbers.forEach((number) => {
      if (number < Validator.#NUMBER_MIN || number > Validator.#NUMBER_MAX) {
        throw new Error(ERROR_MESSAGE.INVALID_WINNING_NUMBERS_RANGE);
      }
    });
  }

  static #checkBonusNumberEmptyInput(bonusNumber) {
    if (!bonusNumber) {
      throw new Error(ERROR_MESSAGE.INVALID_EMPTY_BONUS_NUMBER);
    }
  }

  static #checkBonusNumberRange(bonusNumber) {
    if (
      bonusNumber < Validator.#NUMBER_MIN ||
      bonusNumber > Validator.#NUMBER_MAX
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

  static #checkPurchaseAmountDivisibleByThousand(amount) {
    const price = Number(amount);
    if (price % Validator.#PURCHASE_DIVISION_UNIT !== 0) {
      throw new Error(
        ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT_DIVISIBLE_BY_THOUSAND
      );
    }
  }
}

export default Validator;
