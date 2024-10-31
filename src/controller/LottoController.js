import InputView from "../view/InputView.js";
class LottoController {
  #inputView;
  constructor() {
    this.#inputView = new InputView();
  }
  async run() {
    try {
      const lottoAmount = await this.#inputView.readLottoAmount();
    } catch (error) {
      throw error;
    }
  }
}
export default LottoController;
