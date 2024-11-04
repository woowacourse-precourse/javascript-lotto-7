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
    const lottos = App.getIssuedLottos(lottoMachine);
    App.showIssuingProcess(lottos);

    const winningLottoNumbers = await App.getWinningLottoNumbers();
    const analyzer = App.getAnalyzer(lottos, winningLottoNumbers);
    App.showTotalStatistics(analyzer);

    const profit = App.estimateProfit(analyzer, payment);
    App.showProfit(profit);
  }

  static async getUserPayment() {
    const payment = await LottoMachine.getPayment();
    return payment;
  }

  static getLottoMachine(payment, lotto) {
    const lottoMachine = new LottoMachine(payment, lotto);
    return lottoMachine;
  }

  static getIssuedLottos(lottoMachine) {
    const lottos = lottoMachine.getLottos();
    return lottos;
  }

  static showIssuingProcess(lottos) {
    const amount = lottos.length;

    outputView.printPurchaseAmount(amount);
    outputView.printLotto(lottos);
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

  static showTotalStatistics(analyzer) {
    const matchingTable = analyzer.getMatchingTable();

    outputView.printStatisticsHeader();
    outputView.printSeparatingMark();
    outputView.printStatistics(matchingTable);
  }

  static estimateProfit(analyzer, payment) {
    const matchingTable = analyzer.getMatchingTable();
    const prizeCalculator = new PrizeCalculator(matchingTable, payment);

    return prizeCalculator.getProfit();
  }

  static showProfit(profit) {
    outputView.printProfit(profit);
  }
}

export default App;
