import { CONTEXT, NUMBER } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class LottoNumberValidator {
  static context = CONTEXT.lotto;

  static length = NUMBER.expected_length;

  /**
   * 로또 번호 배열의 유효성을 검사한다.
   * @param {number[]} numbers - 검사할 로또 번호 배열
   */
  static validate(numbers) {
    this.#validateLength(numbers);
    this.#validateNumberRange(numbers);
    this.#validateDuplicates(numbers);
  }

  /**
   * 번호 배열의 길이가 올바른지 확인한다.
   * @param {number[]} numbers - 검사할 번호 배열
   * @private
   */
  static #validateLength(numbers) {
    if (numbers.length !== NUMBER.expected_length) {
      throwError(ERROR_MESSAGES.invalid_number_count(this.context, this.length));
    }
  }

  /**
   * 번호 배열 내에 중복이 없는지 확인한다.
   * @param {number[]} numbers - 검사할 번호 배열
   * @private
   */
  static #validateDuplicates(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throwError(ERROR_MESSAGES.invalid_duplicate_number(this.context));
    }
  }

  /**
   * 각 번호가 지정된 범위 내에 있는지 확인한다.
   * @param {number[]} numbers - 검사할 번호 배열
   * @private
   */
  static #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      this.#validateInteger(number);
      this.#validateSingleNumberInRange(number);
    });
  }

  /**
   * 번호가 지정된 범위 내에 있는지 확인한다.
   * @param {number} number - 검사할 번호
   * @private
   */
  static #validateSingleNumberInRange(number) {
    if (number < NUMBER.min_range || number > NUMBER.max_range)
      throwError(
        ERROR_MESSAGES.invalid_number_range(this.context, NUMBER.min_range, NUMBER.max_range),
      );
  }

  /**
   * 번호가 정수인지 확인한다.
   * @param {number} number - 검사할 번호
   * @private
   */
  static #validateInteger(number) {
    if (!Number.isInteger(number)) throwError(ERROR_MESSAGES.invalid_number_type(this.context));
  }
}

export default LottoNumberValidator;
