import LottoView from "../view/LottoView.js";
class LottoController {
  constructor() {
    this.view = new LottoView();
  }

  async init() {
    await this.getLottoAmounts();
  }

  async getLottoAmounts() {
    await this.view.inputLottoAmount();
  }
}

export default LottoController;
