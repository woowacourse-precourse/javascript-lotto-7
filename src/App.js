import { Console } from '@woowacourse/mission-utils';
import ReturnRateCalculator from './ReturnRateCalculator.js';
import LottoManager from './lottoManager.js';

class App {
  #lottoManager;
  #returnRateCalculator;

  constructor() {
    this.#lottoManager = new LottoManager();
    this.#returnRateCalculator = new ReturnRateCalculator();
  }

  async run() {
    try {
      const purchaseAmount = await this.#lottoManager.getPurchaseAmount();
      this.#lottoManager.createLottoNumbers(purchaseAmount);
      const winningNumbers = await this.#lottoManager.getWinningNumbers();
      const matchResult = this.#lottoManager.getMatchResult(winningNumbers);
      this.#lottoManager.printLog(matchResult);

      const returnRate = this.#returnRateCalculator.calculateReturnRate(matchResult, purchaseAmount);

      Console.print(`총 수익률은 ${returnRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
