import { Console, Random } from '@woowacourse/mission-utils';
import { RESULT_MESSAGES, SYSTEM_MESSAGES } from './constants.js';
import validator from './validator.js';
import Lotto from './Lotto.js';

class LottoManager {
  #lottoAmount;
  #lottoList;
  #winningNumbers;
  #bounsNumber;
  #place;

  constructor() {
    this.#lottoAmount = 0;
    this.#lottoList = [];
    this.#winningNumbers = [];
    this.#bounsNumber = 0;
    this.#place = Array(5).fill(0);
  }

  async enterInputs() {
    await this.enterBudget();
    this.generateRandomLottoList();
    this.printLottoList();

    await this.enterWinningNumbers();
    await this.enterBonusNumber();
  }

  async enterBudget() {
    const budget = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BUDGET);
    validator.budget(budget);
    this.#lottoAmount = budget / 1000;
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
    Console.print('');
  }

  async enterBonusNumber() {
    const bonusNumber = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BONUS_NUMBER);
    validator.bonusNumber(bonusNumber, this.#winningNumbers);
    this.#bounsNumber = Number(bonusNumber);
    Console.print('');
  }

  calculateResult() {
    this.#lottoList.forEach((lotto) => {
      const matchCount = lotto.matchNumbersCount(this.#winningNumbers);

      if (matchCount === 3) {
        this.#place[0] += 1;
      } else if (matchCount === 4) {
        this.#place[1] += 1;
      } else if (matchCount === 5 && !lotto.getNumbers().includes(this.#bounsNumber)) {
        this.#place[2] += 1;
      } else if (matchCount === 5) {
        this.#place[3] += 1;
      } else if (matchCount === 6) this.#place[4] += 1;
    });
  }

  printStatistics() {
    Console.print(RESULT_MESSAGES.STATISTICS);
    Console.print(RESULT_MESSAGES.DIVIDER);
    Console.print(`${RESULT_MESSAGES.PLACE_5TH} ${this.#place[0]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_4TH} ${this.#place[1]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_3RD} ${this.#place[2]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_2ND} ${this.#place[3]}개`);
    Console.print(`${RESULT_MESSAGES.PLACE_1ST} ${this.#place[4]}개`);
  }

  printReturns() {
    const unitJackpot = [5000, 50000, 1500000, 30000000, 2000000000];
    const total = unitJackpot.reduce(
      (acc, jackpot, index) => acc + jackpot * this.#place[index],
      0,
    );
    const rate = ((total / (this.#lottoAmount * 1000)) * 100).toFixed(1);
    Console.print(`${RESULT_MESSAGES.RETURNS} ${rate}%입니다.`);
  }
}

export default LottoManager;
