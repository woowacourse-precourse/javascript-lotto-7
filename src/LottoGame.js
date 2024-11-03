import { Input } from './Input.js';
import { Money } from './Money.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { ERROR } from './constant.js';
import Lotto from './Lotto.js';
import { Bonus } from './Bonus.js';

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
        .map(() =>
          Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b),
        );
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

  async addBonusNumber(winningLotto) {
    try {
      const bonusNumber = await this.#inputInstance.inputBonusNumber();
      new Bonus(bonusNumber, winningLotto);
      return bonusNumber;
    } catch (error) {
      Console.print(ERROR.message);
      return this.addBonusNumber();
    }
  }

  printLotto(lottoList) {
    Console.print(`${lottoList.length}개를 구매 했습니다.`);
    lottoList.forEach((lotto) => Console.print(lotto));
  }

  async start() {
    const lottoList = await this.generateLotto();
    this.printLotto(lottoList);
    const winningLotto = await this.winningLotto();
    const bonusNumber = await this.addBonusNumber(winningLotto);
  }
}
