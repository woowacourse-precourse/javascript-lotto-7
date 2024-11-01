import LottoView from "../view/LottoView.js";

export default class LottoController {
  constructor() {
    this.view = new LottoView();
  }

  async startLotto() {
    const purchaseAmount = await this.view.getPurchaseAmount();
  }
}
