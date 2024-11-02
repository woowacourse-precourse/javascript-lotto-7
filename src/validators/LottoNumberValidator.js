import { CONTEXT, NUMBER } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class LottoNumberValidator {
  static context = CONTEXT.lotto;

  static length = NUMBER.expected_length;

  static validate(numbers) {
    this.#validateLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicates(numbers);
  }

  static #validateLength(numbers) {
    if (numbers.length !== NUMBER.expected_length) {
      throwError(ERROR_MESSAGES.invalid_number_count(this.context, this.length));
    }
  }

  static #validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throwError(ERROR_MESSAGES.invalid_duplicate_number(this.context));
    }
  }

  static #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      this.#validateInteger(number);
      this.#validateSingleNumberInRange(number);
    });
  }

  static #validateSingleNumberInRange(number) {
    if (number < NUMBER.min_range || number > NUMBER.max_range)
      throwError(
        ERROR_MESSAGES.invalid_number_range(this.context, NUMBER.min_range, NUMBER.max_range),
      );
  }

  static #validateInteger(number) {
    if (!Number.isInteger(number)) throwError(ERROR_MESSAGES.invalid_number_type(this.context));
  }
}

export default LottoNumberValidator;
