import LottoStatistics from './LottoStatistics.js';
import LottoStore from './LottoStore.js';
import OutputView from './view/OutputView.js';
import WinningLottoMachine from './WinningLottoMachine.js';

class App {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  async run() {
    const purchasedLottos = await this.lottoStore.purchaseLottos();
    const winningLotto = await WinningLottoMachine.createWinningLotto();
    const statistics = new LottoStatistics(
      purchasedLottos.getLottos(),
      winningLotto,
      this.lottoStore.getAmount(),
    );
    statistics.calculateStatistics();
    OutputView.printResult(statistics.getWinningStatistics(), statistics.getRangeOfReturn());
  }
}

export default App;
