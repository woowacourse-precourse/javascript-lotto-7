import { CONTEXT, NUMBER } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class BonusNumberValidator {
  static context = CONTEXT.bonus;

  /**
   * 보너스 번호의 유효성을 검사한다.
   * @param {number} bonusNumber - 보너스 번호
   * @param {number[]} winningNumbers - 당첨 번호 배열
   */
  static validate(bonusNumber, winningNumbers) {
    this.#validateInteger(bonusNumber);
    this.#validateSingleNumberInRange(bonusNumber);
    this.#validateBonusNumberNotDuplicated(bonusNumber, winningNumbers);
  }

  /**
   * 보너스 번호가 정수인지 확인한다.
   * @param {number} number - 검사할 번호
   * @private
   */
  static #validateInteger(number) {
    if (!Number.isInteger(number)) {
      throwError(ERROR_MESSAGES.invalid_number_type(this.context));
    }
  }

  /**
   * 보너스 번호가 당첨 번호와 중복되지 않는지 확인한다.
   * @param {number} bonusNumber - 보너스 번호
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @private
   */
  static #validateBonusNumberNotDuplicated(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throwError(ERROR_MESSAGES.invalid_bonus_duplicate);
    }
  }

  /**
   * 보너스 번호가 지정된 범위 내에 있는지 확인한다.
   * @param {number} number - 검사할 번호
   * @private
   */
  static #validateSingleNumberInRange(number) {
    if (number < NUMBER.min_range || number > NUMBER.max_range)
      throwError(
        ERROR_MESSAGES.invalid_number_range(this.context, NUMBER.min_range, NUMBER.max_range),
      );
  }
}

export default BonusNumberValidator;
