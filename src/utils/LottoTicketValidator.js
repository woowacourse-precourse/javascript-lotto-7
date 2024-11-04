import { LOTTO_ERROR } from '../constant/Constants.js';

export default class LottoTicketValidator {
  #checkNumber(amount) {
    const regex = /^[0-9]*$/;

    if (regex.test(Number(amount))) {
      return;
    }
    throw new Error(LOTTO_ERROR.INVALID_AMOUNT_TYPE);
  }

  #checkPriceUnit(amount) {
    const money = Number(amount);
    const PRICE = 1000;

    // 1000단위가 아닐 경우 ERROR 출력
    if (money % PRICE) {
      throw new Error(LOTTO_ERROR.INVALID_AMOUNT);
    }
  }

  #checkMinimumPrice(amount) {
    const PRICE = 1000;

    if (Math.floor(amount / PRICE)) {
      return;
    }
    throw new Error(LOTTO_ERROR.INVALID_MINIMUM_PRICE);
  }

  validateAmount(amount) {
    this.#checkNumber(amount);
    this.#checkMinimumPrice(amount);
    this.#checkPriceUnit(amount);
  }
}
