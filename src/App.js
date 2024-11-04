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
    // 로또 구매
    const lottoBundle = await this.lottoStore.purchaseLottos();
    OutputView.printMessage(PRINT_MESSAGES.OUTPUT.LOTTO_COUNT(this.lottoStore.getLottoCount()));
    OutputView.printLottoBundle(lottoBundle.getLottos());

    // 당첨 로또 생성
    const winningLotto = await WinningLottoMachine.createWinningLotto();

    // 당첨 통계 계산
    const statistics = new LottoStatistics(this.lottoStore.getAmount());
    statistics.calculateStatistics(lottoBundle.getLottos(), winningLotto);
    OutputView.printResult(statistics.getWinningStatistics(), statistics.getRangeOfReturn());
  }
}

export default App;
