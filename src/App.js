import { PRINT_MESSAGES } from './constants/messages.js';
import LottoStatistics from './LottoStatistics.js';
import LottoStore from './LottoStore.js';
import OutputView from './view/OutputView.js';
import WinningLottoMachine from './WinningLottoMachine.js';

class App {
  constructor() {
    this.lottoStore = new LottoStore();
    this.statistics = new LottoStatistics();
  }

  async run() {
    // 로또 구매
    const { lottoCount, lottoBundle } = await this.lottoStore.purchaseLottos();
    OutputView.printMessage(PRINT_MESSAGES.OUTPUT.LOTTO_COUNT(lottoCount));
    OutputView.printLottoBundle(lottoBundle.getLottos());

    const winningLotto = await WinningLottoMachine.createWinningLotto(); // 당첨 로또 생성

    // 당첨 통계 계산
    this.statistics.calculateStatistics(lottoBundle.getLottos(), winningLotto);
    OutputView.printResult(
      this.statistics.getWinningStatistics(),
      this.statistics.getRangeOfReturn(),
    );
  }
}

export default App;
