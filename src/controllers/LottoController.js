import InputView from '../views/InputView.js';

export default class LottoController {
  #InputView;

  constructor(inputView) {
    this.#InputView = inputView;
  }

  async purchaseLotto() {
    const purchseAmount = await this.#InputView.getPurchaseAmount();
  }
}
