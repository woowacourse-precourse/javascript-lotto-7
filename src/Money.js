import { ERROR } from './constant.js';

export class Money {
  #money;

  constructor(money) {
    this.#money = money;
    this.#validate(money);
  }

  #validate(money) {
    this.#isEvenThousand(money);
  }

  #isEvenThousand(money) {
    const isValidAmount = money % 1000 === 0;

    if (!money || !isValidAmount) {
      throw Error(ERROR.message);
    }
  }
}
