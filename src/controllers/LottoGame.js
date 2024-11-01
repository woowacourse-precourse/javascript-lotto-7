import errorHandler from '../utils/errorHandler.js';
import Amount from '../models/Amount.js';
import Input from '../views/Input.js';

class LottoGame {
  constructor() {
    this.inputView = new Input();
  }

  async startGame() {
    await errorHandler(this.#purchaseLotto.bind(this));
  }

  async #purchaseLotto() {
    const inputAmount = await this.inputView.getPurchaseAmount();
    this.amount = new Amount(inputAmount);
  }
}

export default LottoGame;
