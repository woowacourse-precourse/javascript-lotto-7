import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGES } from './constants.js';

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

  async enterBudget() {
    const budget = await Console.readLineAsync(SYSTEM_MESSAGES.ENTER_BUDGET);
    this.#lottoAmount = budget / 1000;
  }
}

export default LottoManager;
