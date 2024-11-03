import PRIZE_AMOUNTS from '../constants/prizeAmounts.js';
import UserInterface from '../utils/UserInterface.js';
import Lotto from '../models/Lotto.js';
import { Random } from '@woowacourse/mission-utils';
import ErrorHandler from '../utils/ErrorHandler.js';

class LottoGame {
  #paymentAmount;
  #winningNumbers;
  #bonusNumber;
  #lottoList;
  #matchCounts;
  #totalYield;

  async #queryPaymentAmout() {
    return await ErrorHandler.createRetryLoop(UserInterface.queryPaymentAmout)();
  }

  #generateLottos(count) {
    this.#lottoList = Array.from({ length: count }, () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  async #queryWinningNumbers() {
    return await ErrorHandler.createRetryLoop(UserInterface.queryWinningNumbers)();
  }

  async #queryBonusNumber(winningNumbers) {
    return await ErrorHandler.createRetryLoop(() => UserInterface.queryBonusNumber(winningNumbers))();
  }

  async initialize() {
    this.#paymentAmount = await this.#queryPaymentAmout();

    this.#generateLottos(this.#paymentAmount / 1000);
    UserInterface.printLottos(this.#lottoList);

    this.#winningNumbers = new Set(await this.#queryWinningNumbers());
    this.#bonusNumber = await this.#queryBonusNumber(this.#winningNumbers);
    this.#matchCounts = Array(8).fill(0);
  }

  computeWinners() {
    this.#lottoList
      .map((lotto) => lotto.getNumbers())
      .forEach((numbers) => {
        let matchedCount = numbers.reduce(
          (accumulatedCount, number) => accumulatedCount + this.#winningNumbers.has(number),
          0
        );

        if (matchedCount === 5 && numbers.includes(this.#bonusNumber)) {
          this.#matchCounts[7] += 1;
        } else {
          this.#matchCounts[matchedCount] += 1;
        }
      });
    
    return this;
  }

  computeTotalYield() {
    const totalPrize = this.#matchCounts.reduce(
      (total, count, index) => total + count * PRIZE_AMOUNTS[index],
      0
    );

    this.#totalYield = (totalPrize / this.#paymentAmount) * 100;
    return this;
  }

  printResult() {
    UserInterface.printResult(this.#matchCounts, this.#totalYield);
  }
}

export default LottoGame;
