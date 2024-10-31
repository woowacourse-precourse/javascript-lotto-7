import { Console, Random } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGES } from './constants.js';
import validator from './validator.js';
import Lotto from './Lotto.js';

class LottoManager {
  #lottoAmount;
  #lottoList;
  #winningNumbers;
  #bounsNumber;

  constructor() {
    this.#lottoAmount = 0;
    this.#lottoList = [];
    this.#winningNumbers = [];
    this.#bounsNumber = 0;
  }

  getLottoAmount() {
    return this.#lottoAmount;
  }

  async enterBudget() {
    const budget = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BUDGET);
    validator.budget(budget);
    this.#lottoAmount = budget / 1000;

    this.generateRandomLottoList();
    this.printLottoList();
  }

  generateRandomLottoList() {
    this.#lottoList = Array.from(
      { length: this.#lottoAmount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)),
    );
  }

  printLottoList() {
    Console.print(`\n${this.#lottoAmount}${SYSTEM_MESSAGES.BUY_AMOUNT}`);
    this.#lottoList.forEach((lotto) => {
      Console.print(`${lotto.toString()}`);
    });
    Console.print('');
  }

  async enterWinningNumbers() {
    const rawWinningNumbers = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_WINNING_NUMBERS);
    const winningNumbers = rawWinningNumbers.split(',').map((number) => Number(number));
    this.#winningNumbers = new Lotto(winningNumbers);
  }
}

export default LottoManager;
