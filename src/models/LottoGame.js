import UserInterface from '../utils/UserInterface.js';
import Lotto from './Lotto.js';

class LottoGame {
  #paymentAmount;
  #winningNumbers;
  #bonusNumber;
  #lottoList;
  #result;

  async initialize() {
    this.#paymentAmount = await UserInterface.queryPaymentAmout();

    this.#generateLottos(this.#paymentAmount / 1000);
    UserInterface.printLottos(this.#lottoList);

    this.#winningNumbers = new Set(await UserInterface.queryWinningNumbers());
    this.#bonusNumber = await UserInterface.queryBonusNumber(this.#winningNumbers);

    this.#result = Array(8).fill(0);
  }

  #generateLottos(count) {
    this.#lottoList = Array.from({ length: count }, () => new Lotto());
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
          this.#result[7] += 1;
        } else {
          this.#result[matchedCount] += 1;
        }
      });
  }
}

export default LottoGame;
