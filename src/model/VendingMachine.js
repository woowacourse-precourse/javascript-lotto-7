import { Exception } from '../Utils.js';

class VendingMachine {
  /** @param {number} money */
  constructor(money) {
    this.#putInMoney(money);
  }

  /** @param {number} money */
  #putInMoney(money) {
    VendingMachine.validateMoney(money);
  }

  /** @param {number} money */
  static validateMoney(money) {
    VendingMachine.#validateMoneyType(money);
  }

  /** @param {number} money */
  static #validateMoneyType(money) {
    if (Number.isNaN(money) || !Number.isSafeInteger(money)) {
      throw new Exception('유효하지 않은 금액입니다.');
    }
  }
}

export default VendingMachine;
