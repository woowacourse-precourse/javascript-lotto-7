import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import InputView from "../view/InputView.js";

class LottoController {
  async execute() {
    const purchaseMoney = await InputView.enterPurchaseMoney();
    PurchaseMoneyValidator.checkValid(purchaseMoney);
  }
}

export default LottoController;
