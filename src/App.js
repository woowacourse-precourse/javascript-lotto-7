import BuyLotto from './BuyLotto.js';
import LottoResult from './LottoResult.js';
import BonusLotto from './BonusLotto.js';
import Lotto from './Lotto.js';
import LottoReturn from './LottoReturn.js';
import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  THREE_HYPHEN,
  MATCH_COUNT,
} from './constants.js';

class App {
  async #getPurchaseLotto() {
    const amount = await Console.readLineAsync(
      INPUT_MESSAGES.lottoAmountInput + '\n'
    );
    try {
      const buyLotto = new BuyLotto(amount);
      const lottos = await buyLotto.buyLotto();

      return [lottos, amount];
    } catch (error) {
      Console.print(error.message);

      return this.#getPurchaseLotto();
    }
  }

  async #getLottoWinningNumbers() {
    const numbers = await Console.readLineAsync(
      INPUT_MESSAGES.matchNumberInput
    );
    try {
      const winningNumbers = numbers.split(',');
      const lotto = new Lotto(winningNumbers);

      return lotto.createLotto();
    } catch (error) {
      Console.print(error.message);

      return this.#getLottoWinningNumbers();
    }
  }

  async #getBonusNumbers() {
    const number = await Console.readLineAsync(INPUT_MESSAGES.bonusNumberInput);
    try {
      const bonus = new BonusLotto(number);

      return bonus.createBonusLotto();
    } catch (error) {
      Console.print(error.message);

      return this.#getBonusNumbers();
    }
  }

  #printLottoResult(matchResult, lottoReturn) {
    Console.print(OUTPUT_MESSAGES.matchStatistics);
    Console.print(THREE_HYPHEN);
    Console.print(
      `3개 일치 (5,000원) - ${matchResult[MATCH_COUNT.three]}개\n` +
        `4개 일치 (50,000원) - ${matchResult[MATCH_COUNT.four]}개\n` +
        `5개 일치 (1,500,000원) - ${matchResult[MATCH_COUNT.five]}개\n` +
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchResult.bonus}개\n` +
        `6개 일치 (2,000,000,000원) - ${matchResult[MATCH_COUNT.six]}개`
    );
    Console.print(`총 수익률은 ${lottoReturn.caculateReturn()}%입니다.`);
  }

  async run() {
    const [lottos, buyAmount] = await this.#getPurchaseLotto();

    const winningNumbers = await this.#getLottoWinningNumbers();
    const bonusNumber = await this.#getBonusNumbers();

    const lottoResult = new LottoResult(winningNumbers, bonusNumber, lottos);
    const matchResult = await lottoResult.lottoResult();

    const lottoReturn = new LottoReturn(buyAmount, matchResult);

    this.#printLottoResult(matchResult, lottoReturn);
  }
}

export default App;
