import LottoStatistics from './LottoStatistics.js';
import LottoStore from './LottoStore.js';
import WinningLottoMachine from './WinningLottoMachine.js';

class App {
  constructor() {
    this.lottoStore = new LottoStore();
    this.winningLottoMachine = new WinningLottoMachine();
  }

  async run() {
    const purchasedLottos = await this.lottoStore.purchaseLottos();
    const winningLotto = await this.winningLottoMachine.createWinningLotto();
    const statistics = new LottoStatistics(
      purchasedLottos.getLottos(),
      winningLotto,
      this.lottoStore.getAmount(),
    );
    statistics.calculateStatistics();
    statistics.printStatistics();
  }
}

export default App;
