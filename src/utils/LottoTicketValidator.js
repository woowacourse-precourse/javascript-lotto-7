import { LOTTO_ERROR } from '../constant/Constants.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoTicketValidator {
  static PRICE_UNIT = 1000;

  #checkNumber(amount) {
    const regex = /^[0-9]*$/;
    if (!regex.test(amount)) {
      Console.print(LOTTO_ERROR.INVALID_AMOUNT_TYPE);
      return false;
    }
    return true;
  }

  #checkPriceUnit(amount) {
    const money = Number(amount);

    if (money % PRICE_UNIT !== 0) {
      Console.print(LOTTO_ERROR.INVALID_AMOUNT);
      return false;
    }
    return true;
  }

  #checkMinimumPrice(amount) {
    if (Math.floor(amount / PRICE_UNIT) === 0) {
      Console.print(LOTTO_ERROR.INVALID_MINIMUM_PRICE);
      return false;
    }
    return true;
  }

  validateAmount(amount) {
    if (!this.#checkNumber(amount) || !this.#checkPriceUnit(amount) || !this.#checkMinimumPrice(amount)) {
      return false;
    }
    return true;
  }
}
