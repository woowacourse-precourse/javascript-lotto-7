import LottoController from './controllers/LottoController.js';
import LottoPurchaser from './models/LottoPurchaser.js';
import WinningLotto from './models/WinningLotto.js';
import InputLottoView from './views/InputLottoView.js';
import OutputLottoView from './views/OutputLottoView.js';

class App {
  async run() {
    const outPutLottoView = new OutputLottoView();
    const inputLottoView = new InputLottoView();
    const lottoPurchaser = new LottoPurchaser();
    const winningLotto = new WinningLotto();

    const lottoController = new LottoController(
      lottoPurchaser,
      winningLotto,
      inputLottoView,
      outPutLottoView,
    );

    await lottoController.run();
  }
}

export default App;
