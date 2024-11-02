import ERROR_MESSAGES from './constants/error.js';
import { LOTTO } from './constants/lotto.js';
import applyToValueOrArray from './utils/applyToValueOrArray.js';
import { handleError, hasDuplicates, isEmptyOrNull, isIntegerNumber, isNegativeNumber } from './utils/index.js';
import isInvalidNumber from './utils/isInvalidNumber.js';

class Validator {
  static isEmpty(value) {
    handleError(isEmptyOrNull(value), ERROR_MESSAGES.EMPTY);
  }

  static isNotDivisible(value) {
    handleError(+value % LOTTO.PRICE_UNIT !== 0, ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  }

  static isNegative(value) {
    handleError(isNegativeNumber(value), ERROR_MESSAGES.PRICE_NOT_DIVISIBLE);
  }

  static isInvalid(value) {
    handleError(isInvalidNumber(value), ERROR_MESSAGES.INVALID_NUMBER);
  }

  static isDuplicated(value) {
    handleError(hasDuplicates(value), ERROR_MESSAGES.DUPLICATE_WINNING_NUMBER);
  }

  static isInteger(value) {
    handleError(isIntegerNumber(value), ERROR_MESSAGES.NOT_INTEGER);
  }

  static includedInArray(arr, number) {
    handleError(arr.includes(number), ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  }

  static isInValidNumberRange(value) {
    const condition = applyToValueOrArray(value, (v) => v < LOTTO.MIN_NUMBER || v > LOTTO.MAX_NUMBER);
    handleError(condition, ERROR_MESSAGES.INVALID_NUMBER_RANGE);
  }

  static isInValidPriceRange(value) {
    const condition = applyToValueOrArray(value, (v) => v < LOTTO.PRICE_UNIT || v > LOTTO.MAX_PRICE);
    handleError(condition, ERROR_MESSAGES.INVALID_PRICE_RANGE);
  }

  static lengthIsNotEqual(length, condition) {
    let errorMessage;

    if (condition === LOTTO.LENGTH_WINNING_NUMBER) {
      errorMessage = ERROR_MESSAGES.LENGTH_WINNING_NUMBERS;
    } else if (condition === LOTTO.LENGTH_BONUS_NUMBER) {
      errorMessage = ERROR_MESSAGES.LENGTH_BONUS_NUMBERS;
    }

    handleError(length !== condition, errorMessage);
  }

  static defaultNumber(value) {
    // 빈 값, 공백
    Validator.isEmpty(value);
    // 숫자가 아닌 값
    Validator.isInvalid(value);
    // 음수
    Validator.isNegative(value);
    // 정수가 아닌 값
    Validator.isInteger(value);
  }

  static price(price) {
    Validator.defaultNumber(price);
    Validator.isInValidPriceRange(price);
    Validator.isNotDivisible(price);
  }

  static lottoNumbers(numbers) {
    Validator.lengthIsNotEqual(numbers.length, LOTTO.LENGTH_WINNING_NUMBER);
    Validator.defaultNumber(numbers);
    Validator.isInValidNumberRange(numbers);
    Validator.isDuplicated(numbers);
  }

  static bonusNumber(winningNumbers, bonusNumber) {
    Validator.lengthIsNotEqual([bonusNumber].length, LOTTO.LENGTH_BONUS_NUMBER);
    Validator.defaultNumber(bonusNumber);
    Validator.isInValidNumberRange(bonusNumber);
    Validator.includedInArray(winningNumbers, bonusNumber);
  }
}
export default Validator;
