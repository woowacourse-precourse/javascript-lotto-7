import { InputService } from './service/InputService.js';

class App {
  async run() {
    const purchasedLottoInfo = await InputService.getPurchasedLotto();
    const winningLotto = await InputService.getWinningNumbers();
    const bonusNum = await InputService.getBonusNumber(winningLotto);
  }
}

export default App;
