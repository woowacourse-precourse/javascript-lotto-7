import { LOTTO_ERROR, LOTTO } from '../constant/Constants.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoTicketValidator {
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
    if (money % LOTTO.PRICE !== 0) {
      Console.print(LOTTO_ERROR.INVALID_AMOUNT);
      return false;
    }
    return true;
  }

  #checkMinimumPrice(amount) {
    if (Math.floor(amount / LOTTO.PRICE) === 0) {
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
