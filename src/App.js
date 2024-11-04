import LottoGame from './classes/LottoGame.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const lottoManager = await inputView.inputPurchasePrice();
    outputView.printLottoCount(lottoManager.lottoCount);

    lottoManager.generateLottos();
    const myLottos = lottoManager.getLottos();
    outputView.printMyLotto(myLottos);

    const winningLotto = await inputView.inputWinningNumbers();
    const winningNumber = winningLotto.lottoNumber;
    const lottoBonus = await inputView.inputBonusNumber(winningNumber);

    const lottoGame = new LottoGame(
      myLottos,
      winningNumber,
      lottoBonus.bonusNumber,
      lottoManager.purchasePrice
    );

    const lottoResult = lottoGame.drawLotto();
    outputView.printLottoResult(lottoResult);

    const profitRate = lottoGame.calculateLotto();
    outputView.printLottoProfit(profitRate);
  }
}

export default App;
