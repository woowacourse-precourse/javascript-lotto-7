import InputView from '../view/InputView.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
  }

  async prepareGame() {
    await this.inputView.askPurchasePrice();
  }
}

export default GameController;
