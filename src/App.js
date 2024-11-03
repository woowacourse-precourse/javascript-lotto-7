import { PRINT_MESSAGES } from './constants/messages.js';
import LottoStatistics from './LottoStatistics.js';
import LottoStore from './LottoStore.js';
import OutputView from './view/OutputView.js';
import WinningLottoMachine from './WinningLottoMachine.js';

class App {
  constructor() {
    this.lottoStore = new LottoStore();
  }

  async run() {
    const { lottoCount, lottoBundle } = await this.lottoStore.purchaseLottos();
    OutputView.printMessage(PRINT_MESSAGES.OUTPUT.LOTTO_COUNT(lottoCount));
    OutputView.printLottoBundle(lottoBundle.getLottos());

    const winningLotto = await WinningLottoMachine.createWinningLotto();

    const statistics = new LottoStatistics(
      lottoBundle.getLottos(),
      winningLotto,
      this.lottoStore.getAmount(),
    );
    statistics.calculateStatistics();
    OutputView.printResult(statistics.getWinningStatistics(), statistics.getRangeOfReturn());
  }
}

export default App;
