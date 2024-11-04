import { Console } from '@woowacourse/mission-utils';

class PurchaseLotto {
  #quantity;

  constructor(money) {
    this.#quantity = this.#calculateQuantity(money);
  }

  #calculateQuantity(money) {
    return Math.floor(money / 1000);
  }

  getQuantity() {
    return this.#quantity;
  }

  printQuantity() {
    Console.print(`\n${this.#quantity}개를 구매했습니다.`);
  }
}

export default PurchaseLotto;
