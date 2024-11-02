// @ts-check
import Validator from '../lib/Validator.js';
import { isNotEmptyString } from '../lib/utils.js';

import ValidationStrategy from './validation.strategy.js';

class PurchaseAmountValidationStrategy extends ValidationStrategy {
  /** @type {string} */
  #purchaseAmount;

  static ERROR_MESSAGE = Object.freeze({
    INPUT_CAN_NOT_BE_EMPTY: '[ERROR] 빈 값은 입력할 수 없어요',
  });

  /**
   *
   * @param {string} purchaseAmount
   */
  constructor(purchaseAmount) {
    super();

    this.#purchaseAmount = purchaseAmount;
  }

  /**
   *
   * @param {string} purchaseAmount
   * @returns  {boolean}
   */
  #isNotEmpty(purchaseAmount) {
    return isNotEmptyString(purchaseAmount);
  }

  validate() {
    new Validator().validate(this.#purchaseAmount).with(this.#isNotEmpty, {
      message: PurchaseAmountValidationStrategy.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
    });
  }
}

export default PurchaseAmountValidationStrategy;
