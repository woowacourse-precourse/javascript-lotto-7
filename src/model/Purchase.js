import { Random } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGES,
  LOTTO_NUM_MAX,
  LOTTO_NUM_MIN,
  UNIT,
} from '../constant/constant.js';

class Purchase {
  #amount;
  #tickets;
  #lotteryNumbers = [];

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#tickets = this.#amount / UNIT;
  }

  #validate(amount) {
    if (amount % UNIT !== 0) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT_FORM);
    }
    if (amount < UNIT) {
      throw new Error(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT_RANGE);
    }
  }

  purchaseTickets(amount) {
    return this.#tickets;
  }

  generateLotteryNumbers() {
    for (let i = 0; i < this.#tickets; i++) {
      let numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUM_MIN,
        LOTTO_NUM_MAX,
        6
      );
      this.#lotteryNumbers[i] = numbers.sort((a, b) => a - b).join(', ');
    }
    return this.#lotteryNumbers;
  }
}

export default Purchase;
