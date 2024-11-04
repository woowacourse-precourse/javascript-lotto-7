import ERRORS from '../constants/errorMessages.js';
import ErrorHandler from './ErrorHandler.js';

class Validator {
  static isDivisibleBy1000(number) {
    return number % 1000 === 0;
  }

  static isPositiveNumber(number) {
    return number > 0;
  }

  static isNaN(value) {
    return Number.isNaN(Number(value));
  }

  static isValidLottoNumber(number) {
    return number >= 1 && number <= 45;
  }

  static hasUniqueNumbers(numbers) {
    return new Set(numbers).size === numbers.length;
  }

  static isArrayWithLength(array, length) {
    return Array.isArray(array) && array.length === length;
  }

  static validatePaymentAmount(amount) {
    ErrorHandler.throwIf(Validator.isNaN(amount), ERRORS.NOT_A_NUMBER);
    ErrorHandler.throwIf(!Validator.isPositiveNumber(amount), ERRORS.NOT_POSITIVE_NUMBER);
    ErrorHandler.throwIf(!Validator.isDivisibleBy1000(amount), ERRORS.NOT_DIVISIBLE_BY_1000);
  }

  static validateBonusNumber(winningNumbers, bonusNumber) {
    ErrorHandler.throwIf(Validator.isNaN(bonusNumber), ERRORS.NOT_A_NUMBER);
    ErrorHandler.throwIf(!Validator.isValidLottoNumber(bonusNumber), ERRORS.INVALID_LOTTO_NUMBER);
    ErrorHandler.throwIf(!Validator.hasUniqueNumbers([...winningNumbers, bonusNumber]), ERRORS.DUPLICATED_WINNING_NUMBERS);
  }

  static validateLottoNumbers(numbers) {
    ErrorHandler.throwIf(!Validator.isArrayWithLength(numbers, 6), ERRORS.INVALID_WINNING_NUMBERS_LENGTH);

    numbers.forEach((number) => {
      ErrorHandler.throwIf(Validator.isNaN(number), ERRORS.NOT_A_NUMBER);
      ErrorHandler.throwIf(!Validator.isValidLottoNumber(number), ERRORS.INVALID_LOTTO_NUMBER);
    })
    
    ErrorHandler.throwIf(!Validator.hasUniqueNumbers(numbers), ERRORS.DUPLICATED_WINNING_NUMBERS);
  }
}

export default Validator;
