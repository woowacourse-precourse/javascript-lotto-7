import { Random } from '@woowacourse/mission-utils';

import Lotto from './Lotto.js';

import { ERROR_MESSAGE, LOTTO } from './constants/index.js';

class LotteryRetailer {
  static pickLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.minNumber,
      LOTTO.maxNumber,
      LOTTO.numberCount
    );
  }

  issueTicket(price) {
    this.#validatePrice(price);

    const tickets = [];
    const amount = price / LOTTO.ticketPrice;

    for (let i = 0; i < amount; i++) {
      const ticket = new Lotto(LotteryRetailer.pickLottoNumber());
      tickets.push(ticket);
    }

    return tickets;
  }

  #validatePrice(price) {
    if (isNaN(price)) {
      throw Error(ERROR_MESSAGE.price.notNumber);
    }

    const isValidAmountUnit = price % LOTTO.ticketPrice === 0;
    if (!isValidAmountUnit) {
      throw Error(ERROR_MESSAGE.price.invaildAmountUnit);
    }
  }
}

export default LotteryRetailer;
