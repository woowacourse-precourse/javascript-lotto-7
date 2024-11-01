import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';
import MESSAGES from '../constants/messages.js';

class Payment {
  static #MESSAGE = {
    range: '[ERROR] 0보다 큰 수를 입력하세요.',
    unit: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  };

  #payment;

  constructor(payment) {
    this.#payment = Number(payment);
    this.#validate(payment);
  }

  #validate(payment) {
    utils.validateEmpty(payment);
    Payment.#validateNumber(payment);
    this.#validateSafeInteger();
    this.#validateRange();
    this.#validateUnit();
  }

  static #validateNumber(payment) {
    if (VALUES.notNumberFormat.test(payment)) {
      throw new Error(MESSAGES.notNumber);
    }
  }

  #validateSafeInteger() {
    if (!Number.isSafeInteger(this.#payment)) {
      throw new Error(MESSAGES.notInteger);
    }
  }

  #validateRange() {
    if (this.#payment <= 0) {
      throw new Error(Payment.#MESSAGE.range);
    }
  }

  #validateUnit() {
    if (this.#payment % VALUES.price > 0) {
      throw new Error(Payment.#MESSAGE.unit);
    }
  }

  getPayment() {
    return this.#payment;
  }
}

export default Payment;
