import InputView from "../view/InputView.js";

class LottoController {
  async execute() {
    const purchaseMoney = await InputView.enterPurchaseMoney();
  }
}

export default LottoController;
