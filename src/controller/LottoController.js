import LottoInput from "../view/LottoInput.js";

class LottoController {
  #lottoInput;

  constructor() {
    this.#lottoInput = new LottoInput();
  }

  async startGame() {
    await this.#userInput();
  }

  async #userInput() {
    const purchase_money = await this.#lottoInput.readPurchaseMoney();
  }
}

export default LottoController;
