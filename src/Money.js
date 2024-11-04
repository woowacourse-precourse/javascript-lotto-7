import { ERROR } from './constant.js';

export class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.#validate(money);
  }

  #validate(money) {
    this.#isPositive(money);
    this.#isEvenThousand(money);
  }

  #isPositive(money) {
    if (money <= 0) {
      throw Error(ERROR.message);
    }
  }

  #isEvenThousand(money) {
    const isValidAmount = money % 1000 === 0;

    if (!isValidAmount) {
      throw Error(ERROR.message);
    }
  }
}
