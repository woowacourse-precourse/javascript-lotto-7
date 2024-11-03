import { Console } from '@woowacourse/mission-utils';
import ReturnRateCalculator from './ReturnRateCalculator.js';
import LottoController from './LottoController.js';

class App {
  #lottoController;
  #returnRateCalculator;

  constructor() {
    this.#lottoController = new LottoController();
    this.#returnRateCalculator = new ReturnRateCalculator();
  }

  async run() {
    try {
      const purchaseAmount = await this.#lottoController.getPurchaseAmount();
      this.#lottoController.createLottoNumbers(purchaseAmount);
      const winningNumbers = await this.#lottoController.getWinningNumbers();
      const matchResult = this.#lottoController.getMatchResult(winningNumbers);
      this.#lottoController.printLog(matchResult);

      const returnRate = this.#returnRateCalculator.calculateReturnRate(matchResult, purchaseAmount);

      Console.print(`총 수익률은 ${returnRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
