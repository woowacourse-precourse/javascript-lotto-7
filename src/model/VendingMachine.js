import { Random } from '@woowacourse/mission-utils';
import { Exception, formatKRW } from '../Utils.js';
import {
  LOTTO_NUMBER_LENGTH,
  LOTTO_NUMBER_RANGE,
  LOTTO_PRICE,
  PURCHASE_LIMIT_AMOUNT,
} from '../Constants.js';

class VendingMachine {
  /** @type {number} */
  #lottoCount;

  /** @param {number} money */
  constructor(money) {
    this.#putInMoney(money);
  }

  /** @returns {number[]} */
  #getRandomNumbers() {
    const range = [...LOTTO_NUMBER_RANGE, LOTTO_NUMBER_LENGTH];
    const randomNumbers = Random.pickUniqueNumbersInRange(...range);

    return randomNumbers;
  }

  /** @param {number} money */
  static #count(money) {
    return money / LOTTO_PRICE;
  }

  /** @param {number} money */
  #putInMoney(money) {
    VendingMachine.validateMoney(money);
    this.#lottoCount = VendingMachine.#count(money);
  }

  /** @param {number} money */
  static validateMoney(money) {
    VendingMachine.#validateMoneyType(money);
    VendingMachine.#validateMoneyRange(money);
    VendingMachine.#validateMoneyUnit(money);
  }

  /** @param {number} money */
  static #validateMoneyRange(money) {
    const isValid = LOTTO_PRICE <= money && money <= PURCHASE_LIMIT_AMOUNT;
    const exceptionMessage = `로또는 ${formatKRW(LOTTO_PRICE)}원 이상 ${formatKRW(PURCHASE_LIMIT_AMOUNT)}원 이하로 구매 가능합니다.`;

    if (!isValid) {
      throw new Exception(exceptionMessage);
    }
  }

  /** @param {number} money */
  static #validateMoneyUnit(money) {
    const count = this.#count(money);
    const exceptionMessage = `로또는 ${formatKRW(LOTTO_PRICE)}원 단위로 구매 가능합니다.`;

    if (!Number.isSafeInteger(count)) {
      throw new Exception(exceptionMessage);
    }
  }

  /** @param {number} money */
  static #validateMoneyType(money) {
    if (Number.isNaN(money) || !Number.isSafeInteger(money)) {
      throw new Exception('유효하지 않은 금액입니다.');
    }
  }
}

export default VendingMachine;
