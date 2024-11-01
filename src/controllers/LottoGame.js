import errorHandler from '../utils/errorHandler.js';
import Amount from '../models/Amount.js';
import Input from '../views/Input.js';
import Output from '../views/Output.js';
import { LOTTO_PRICE } from '../constants/numbers.js';

function calculateLottoCount(amount) {
  return Math.floor(amount / LOTTO_PRICE);
}

class LottoGame {
  #inputView;
  #outputView;
  #amountModel;
  #lottoCount;

  constructor() {
    this.#inputView = new Input();
    this.#outputView = new Output();
  }

  async startGame() {
    await errorHandler(this.#purchaseLotto.bind(this));

    this.#lottoCount = calculateLottoCount(this.#amountModel.getAmount());
    this.#outputView.printLottoCount(this.#lottoCount);
  }

  async #purchaseLotto() {
    const inputAmount = await this.#inputView.getPurchaseAmount();
    this.#amountModel = new Amount(inputAmount);
  }
}

export default LottoGame;
