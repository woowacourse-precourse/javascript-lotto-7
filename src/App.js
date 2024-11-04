import Lotto from './Lotto.js';
import LottoGenerator from './LottoGenerator.js';
import InputHandler from './InputHandler.js';
import ResultEvaluator from './ResultEvaluator.js';
import { LOTTO_PRICE } from './constants.js';
import { formatLottoNumbers, calculateProfitRate } from './utils.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    try {
      const lottoCount = await this.getLottoCount();
      const lottos = this.createLottos(lottoCount);
      this.printLottos(lottos);

      const { winningNumbers, bonusNumber } = await this.getWinningNumbers();
      const result = ResultEvaluator.evaluateResults(lottos, winningNumbers, bonusNumber);
      ResultEvaluator.printResults(result);

      const profitRate = calculateProfitRate(result);
      Console.print(`총 수익률은 ${profitRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getLottoCount() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    const lottoCount = Math.floor(purchaseAmount / LOTTO_PRICE);
    Console.print(`${lottoCount}개를 구매했습니다.`);
    return lottoCount;
  }

  createLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = LottoGenerator.generateLottoNumbers(); // 랜덤 번호 생성
      try {
        lottos.push(new Lotto(numbers));
      } catch (error) {
        Console.print(error.message);
        i--; // 잘못된 번호로 인해 다시 시도
      }
    }
    return lottos;
  }

  async getWinningNumbers() {
    try {
      const winningNumbers = await InputHandler.getWinningNumbers();
      const bonusNumber = await InputHandler.getBonusNumber();
      return { winningNumbers, bonusNumber };
    } catch (error) {
      Console.print(error.message);
      return await this.getWinningNumbers(); // 오류 발생 시 다시 입력 요청
    }
  }

  printLottos(lottos) {
    lottos.forEach((lotto) => Console.print(formatLottoNumbers(lotto.getNumbers())));
  }
}

export default App;