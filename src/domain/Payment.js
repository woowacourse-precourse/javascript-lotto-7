import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';
import MESSAGES from '../constants/messages.js';

class Payment {
  static #MESSAGE = {
    range: '[ERROR] 0보다 큰 수를 입력하세요.',
    unit: '[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.',
  };

  #payment;

  constructor(paymentInput) {
    this.#payment = Number(paymentInput);
    this.#validate(paymentInput);
  }

  #validate(paymentInput) {
    utils.validateEmpty(paymentInput);
    Payment.#validateNumber(paymentInput);
    utils.validateSafeInteger(this.#payment);
    this.#validateRange();
    this.#validateUnit();
  }

  static #validateNumber(paymentInput) {
    if (VALUES.format.notNumber.test(paymentInput)) {
      throw new Error(MESSAGES.notNumber);
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
