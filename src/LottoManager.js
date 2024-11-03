import { Console, Random } from '@woowacourse/mission-utils';
import { EMPTY_STRING, SYSTEM_MESSAGES } from './constants.js';
import Lotto from './Lotto.js';
import LottoResult from './LottoResult.js';
import InputHandler from './InputHandler.js';

class LottoManager {
  #lottoAmount;
  #lottoList;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#lottoAmount = 0;
    this.#lottoList = [];
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  async run() {
    await this.enterInputs();
    this.result();
  }

  async enterInputs() {
    this.#lottoAmount = await InputHandler.enterBudget();
    this.generateLottoListRandomly();
    this.printLottoList();

    this.#winningNumbers = await InputHandler.enterWinningNumbers();
    this.#bonusNumber = await InputHandler.enterBonusNumber(this.#winningNumbers);
  }

  generateLottoListRandomly() {
    this.#lottoList = Array.from(
      { length: this.#lottoAmount },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)),
    );
  }

  printLottoList() {
    Console.print(`${this.#lottoAmount}${SYSTEM_MESSAGES.BUY_AMOUNT}`);

    this.#lottoList.forEach((lotto) => {
      Console.print(`${lotto.toString()}`);
    });

    Console.print(EMPTY_STRING);
  }

  result() {
    const lottoResult = new LottoResult(this.#lottoList, this.#winningNumbers, this.#bonusNumber);

    lottoResult.calculateResult();
    lottoResult.printStatistics();
    lottoResult.printReturns();
  }
}

export default LottoManager;
