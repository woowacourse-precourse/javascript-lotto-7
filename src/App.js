import { InputService } from './service/InputService.js';
import { OutputService } from './service/OutputService.js';

class App {
  async run() {
    const purchasedLottoInfo = await InputService.getPurchasedLotto();
    const winningLotto = await InputService.getWinningNumbers();
    const bonusNum = await InputService.getBonusNumber(winningLotto);

    OutputService.printResults(purchasedLottoInfo, winningLotto, bonusNum);
  }
}

export default App;
