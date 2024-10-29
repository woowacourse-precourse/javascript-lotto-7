import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async prepareGame() {
    const price = await this.inputView.askPurchasePrice();
    this.outputView.printLottoQuantity(price);
  }
}

export default GameController;
