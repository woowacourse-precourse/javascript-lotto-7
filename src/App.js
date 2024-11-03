import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Utils from './utils/Utils.js';
import WinningLottoManager from './WinningLottoManager.js';
import Analyzer from './Analyzer.js';
import outputView from './userInterface/OutputView.js';
import PrizeCalculator from './PrizeCalculator.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
    const lottos = lottoMachine.getLottos();
    outputView.printLotto(lottos);

    const winningLottoNumbers = await App.getWinningLottoNumbers();
    const analyzer = App.getAnalyzer(lottos, winningLottoNumbers);
    const matchingTable = analyzer.getMatchingTable();
    outputView.printStatistics(matchingTable);

    const payment = lottoMachine.getPayment();
    const profit = App.estimateProfit(matchingTable, payment);
    outputView.printProfit(profit);
  }

  async getLottoMachine() {
    try {
      const payment = await App.getPayment();
      const lottoMachine = LottoMachine.constructLottoMachine(payment, Lotto);
      return lottoMachine;
    } catch (error) {
      Console.print(error.message);

      return this.getLottoMachine();
    }
  }

  static async getPayment() {
    const payment = await inputView.askPayment();
    const parsedPayment = Utils.parsingToNumber(payment);
    return parsedPayment;
  }

  static async getWinningLottoNumbers() {
    const numbers = await WinningLottoManager.selectWinningNumbers();
    const bonusNumber = await WinningLottoManager.selectBonusNumber(numbers);

    return { numbers, bonusNumber };
  }

  static getAnalyzer(lottos, winningLottoNumbers) {
    const analyzer = new Analyzer(lottos, winningLottoNumbers);
    return analyzer;
  }

  static estimateProfit(matchingTable, payment) {
    const prizeCalculator = new PrizeCalculator(matchingTable, payment);
    return prizeCalculator.getProfit();
  }
}

export default App;
