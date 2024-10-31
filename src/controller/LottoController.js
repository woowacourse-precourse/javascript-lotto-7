import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Lotto from '../Lotto.js';

class LottoController {
  #inputView;

  #lottos;

  #winningNumbers;

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
      const bonusNumber = await this.#inputView.readBonusNumber();

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
    return this.#lottos.map((lotto) =>
      lotto.countMatchingNumbers(this.#winningNumbers),
    );
  }

  #printMatchResults(results) {
    Console.print(`결과 : ${results.length}`);
  }
}

export default LottoController;
