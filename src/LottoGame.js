import { Input } from './Input.js';
import { Money } from './Money.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR } from './constant.js';

export class LottoGame {
  #inputInstance;

  constructor() {
    this.#inputInstance = new Input();
  }

  async generateLotto() {
    try {
      const money = await this.#inputInstance.inputMoney();
      new Money(money);
      const amount = money / 1000;

      return new Array(amount)
        .fill(0)
        .map(() => Random.pickUniqueNumbersInRange(1, 45, 6));
    } catch (error) {
      Console.print(ERROR.message);
      return this.generateLotto();
    }
  }

  async start() {
    const lottoList = await this.generateLotto();
  }
}
