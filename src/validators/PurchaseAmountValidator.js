import { AMOUNT } from '../constants/constants.js';
import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

class PurchaseAmountValidator {
  /**
   * 구입 금액의 유효성을 검사한다.
   * @param {number} amount - 구입 금액
   */
  static validate(amount) {
    this.#validateIsNumber(amount);
    this.#validateAmountRange(amount);
  }

  /**
   * 금액이 숫자인지 확인한다.
   * @param {number} amount - 검사할 금액
   * @private
   */
  static #validateIsNumber(amount) {
    if (Number.isNaN(Number(amount))) {
      throwError(ERROR_MESSAGES.purchase_amount_not_number);
    }
  }

  /**
   * 금액이 지정된 범위 내에 있는지 확인한다.
   * @param {number} amount - 검사할 금액
   * @private
   */
  static #validateAmountRange(amount) {
    if (amount < AMOUNT.min) {
      throwError(ERROR_MESSAGES.purchase_amount_min(AMOUNT.min));
    }

    if (amount > AMOUNT.max) {
      throwError(ERROR_MESSAGES.purchase_amount_max(AMOUNT.max));
    }

    if (amount % AMOUNT.unit !== 0) {
      throwError(ERROR_MESSAGES.purchase_amount_unit(AMOUNT.unit));
    }
  }
}

export default PurchaseAmountValidator;
