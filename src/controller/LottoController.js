import PurchasedLottoModel from "../model/purchasedLottoModel.js";
import LottoView from "../view/LottoView.js";

export default class LottoController {
  constructor() {
    this.view = new LottoView();
    this.purchasedLotto = null;
  }

  async startLotto() {
    const purchaseAmount = await this.view.getPurchaseAmount();

    this.purchasedLotto = new PurchasedLottoModel(purchaseAmount);

    const purchasedLottos = this.purchasedLotto.getPurchasedLottos();
  }
}
