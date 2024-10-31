import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Lotto from '../Lotto.js';

class LottoController {
  #inputView;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#inputView = new InputView();
    this.#lottos = [];
  }

  async play() {
    try {
      const amount = await this.#inputView.readLottoAmount();
      this.#lottos = this.#generateLottos(amount);
      this.#printLottos(amount, this.#lottos);

      this.#winningNumbers = await this.#inputView.readWinningNumbers();
      this.#bonusNumber = await this.#inputView.readBonusNumber();

      const matchResults = this.#calculateMatchResults();
      this.#printMatchResults(matchResults);
    } catch (error) {
      Console.print(error);
    }
  }

  #generateLottos(amount) {
    const lottoCount = Math.floor(amount / 1000);
    return Array.from({ length: lottoCount }, () => this.#createLotto());
  }

  #createLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  #printLottos(amount, lottos) {
    const lottoCount = Math.floor(amount / 1000);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  #calculateMatchResults() {
    return this.#lottos.map((lotto) => ({
      matchCount: lotto.countMatchingNumbers(this.#winningNumbers),
      hasBonus: lotto.containsBonusNumber(this.#bonusNumber),
    }));
  }

  #printMatchResults(results) {
    results.forEach((result) => {
      Console.print(
        `일치하는 번호 개수: ${result.matchCount}, 보너스 볼 일치: ${result.hasBonus}`,
      );
    });
  }
}

export default LottoController;
