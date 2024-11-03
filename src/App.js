import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import WinningLottoManager from './WinningLottoManager.js';
import Analyzer from './Analyzer.js';
import outputView from './userInterface/OutputView.js';
import PrizeCalculator from './PrizeCalculator.js';

class App {
  async run() {
    const payment = await App.getUserPayment();
    const lottoMachine = App.getLottoMachine(payment, Lotto);

    const lottos = lottoMachine.getLottos();
    const amount = lottoMachine.getAmount();

    outputView.printPurchaseAmount(amount);
    outputView.printLotto(lottos);

    const winningLottoNumbers = await App.getWinningLottoNumbers();
    const analyzer = App.getAnalyzer(lottos, winningLottoNumbers);
    const matchingTable = analyzer.getMatchingTable();
    outputView.printStatisticsHeader();
    outputView.printSeparatingMark();
    outputView.printStatistics(matchingTable);

    const profit = App.estimateProfit(matchingTable, payment);
    outputView.printProfit(profit);
  }

  static async getUserPayment() {
    const payment = await LottoMachine.getPayment();
    return payment;
  }

  static getLottoMachine(payment, lotto) {
    const lottoMachine = new LottoMachine(payment, lotto);
    return lottoMachine;
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
