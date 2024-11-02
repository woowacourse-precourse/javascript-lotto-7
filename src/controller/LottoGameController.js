import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import LottoMachine from '../model/LottoMachine.js';

class LottoGameController {
  #lottoMachine;

  async startGame() {
    await this.#initializeGame();
  }

  async #initializeGame() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    this.#lottoMachine = new LottoMachine(purchaseAmount); 

    const lottoCount = this.#lottoMachine.getLottoCount();
    OutputView.printPurchaseMessage(lottoCount);
  }

}

export default LottoGameController;