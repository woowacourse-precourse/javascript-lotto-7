import { Input } from './Input.js';
import { Money } from './Money.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR } from './constant.js';
import Lotto from './Lotto.js';

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

  async winningLotto() {
    try {
      const winningLotto = await this.#inputInstance.inputWinningNumber();
      new Lotto(winningLotto);
      return winningLotto;
    } catch (error) {
      Console.print(ERROR.message);
      return this.winningLotto();
    }
  }

  printLotto(lottoList) {
    lottoList.forEach((lotto) => Console.print(lotto));
  }

  async start() {
    const lottoList = await this.generateLotto();
    this.printLotto(lottoList);
    const winningLotto = await this.winningLotto();
  }
}
