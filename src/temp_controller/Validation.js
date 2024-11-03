import { ERROR_MESSAGES } from '../temp_constants/Message.js';

const Validation = {
  validateThousandUnit(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_THOUSAND_UNIT);
    }
  },

  validateNotEmpty(input) {
    if (input === '') {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  },

  validateIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGES.NON_NUMERIC_INPUT);
    }
  },

  validateCommaSeparatedFormat(numbers) {
    if (
      numbers.includes(',,') ||
      numbers.startsWith(',') ||
      numbers.endsWith(',')
    ) {
      throw new Error(ERROR_MESSAGES.INVALID_COMMA_FORMAT);
    }
  },

  validateSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INCORRECT_NUMBER_COUNT);
    }
  },

  validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  },

  validatePositiveInteger(number) {
    if (!(Number.isInteger(number) && number > 0)) {
      throw new Error(ERROR_MESSAGES.NON_POSITIVE_INTEGER);
    }
  },

  validateNumberInRange(number) {
    if (!(number >= 1 && number <= 45)) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }
  },

  validateUniqueBonusNumber(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  },
};

export default Validation;
