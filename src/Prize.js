import { print } from "./util/io.js";
import EXECUTE_MESSAGE from "./util/messages/execute-message.js";
import { NUMBERS } from './util/const.js';

class Prize {
  #matchingNumber;
  #price;
  #isBonus;
  #count;
  constructor(matchingNumber, price, isBonus) {
    this.#matchingNumber = matchingNumber;
    this.#price = price;
    this.#isBonus = isBonus;
    this.#count = NUMBERS.ZERO;
  }

  printResult() {
    let bonusWord = "";
    if (this.#isBonus) {
      bonusWord = ", 보너스 볼 일치";
    }
    print(
      EXECUTE_MESSAGE.PRIZE.STATISTIC({
        matchingNumber: this.#matchingNumber,
        price: this.#price.toLocaleString(),
        count: this.#count,
        bonusWord,
      })
    );
  }

  addCount() {
    this.#count++;
  }

  getPrizeCount() {
    return this.#count * this.#price;
  }
}

export default Prize;
