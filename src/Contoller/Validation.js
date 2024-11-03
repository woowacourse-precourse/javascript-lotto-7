import { ERROR_MESSAGES } from '../constants/Message.js';

class Validation {
  static validateThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_THOUSAND_UNIT);
    }
  }

  static validateNotEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT);
    }
  }

  static validateCommaSeparatedFormat(numbers) {
    if (
      numbers.includes(',,') ||
      numbers.startsWith(',') ||
      numbers.endsWith(',')
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_COMMA_FORMAT);
    }
  }

  static validateSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INCORRECT_NUMBER_COUNT);
    }
  }

  static validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  static validatePositiveInteger(number) {
    if (!(Number.isInteger(number) && number > 0)) {
      throw new Error(ERROR_MESSAGES.NON_POSITIVE_INTEGER);
    }
  }

  static validateNumberInRange(number) {
    if (!(number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }
  }

  static validateUniqueBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default Validation;
