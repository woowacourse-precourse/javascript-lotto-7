import InputView from "../view/InputView.js";

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async run() {
    this.#getLottoPurchaseAmount();
  }

  async #getLottoPurchaseAmount() {
    return await this.#inputView.inputPurchaseAmount();
  }
}

export default LottoController;
