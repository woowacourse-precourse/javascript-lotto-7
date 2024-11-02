import InputView from '../view/InputView.js';
import LottoMachine from '../model/LottoMachine.js';

class LottoGameController {
  #lottoMachine;

  async startGame() {
    await this.#initializeGame();
  }

  async #initializeGame() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    this.#lottoMachine = new LottoMachine(purchaseAmount); 
  }

}

export default LottoGameController;