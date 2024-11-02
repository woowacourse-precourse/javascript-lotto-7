import InputView from '../view/InputView.js';

class LottoGameController {

  async startGame() {
    await this.#initializeGame();
  }

  async #initializeGame() {
    await InputView.getPurchaseAmount();
  }

}

export default LottoGameController;