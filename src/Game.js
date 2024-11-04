import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoResult from './ResultCalculator.js';
import WinningNumbers from './WinningNumbers.js';
import InputValidator from './InputValidator.js';

class Game {
  #lottos = [];
  #winningNumbers;
  #result;

  async purchaseLottos(amount) {
    const count = amount / 1000;
    for (let i = 0; i < count; i++) {
      const numbers = await Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }
    this.#result = new LottoResult(amount);
    return count;
  }

  getLottos() {
    return [...this.#lottos];
  }

  printPurchaseResult(count) {
    Console.print(`${count}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

  async setWinningNumbers() {
    const numbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(numbers);
    this.#winningNumbers = new WinningNumbers(numbers, bonusNumber);
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    return InputValidator.validateWinningNumbers(input);
  }

  async #getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    return InputValidator.validateBonusNumber(input, winningNumbers);
  }

  calculateResults() {
    if (!this.#winningNumbers || !this.#result) {
      throw new Error('[ERROR] 당첨 번호 또는 구매 기록이 없습니다.');
    }

    this.#lottos.forEach((lotto) => {
      const { matchCount, matchBonus } = this.#winningNumbers.match(lotto);
      this.#result.addResult(matchCount, matchBonus);
    });
  }

  printResults() {
    this.#result.print();
  }
}

export default Game;
