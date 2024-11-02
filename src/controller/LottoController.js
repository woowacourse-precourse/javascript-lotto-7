import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import InputView from "../view/InputView.js";

class LottoController {
  async execute() {
    const purchaseMoney = await this.#repeatUntilCorrectPurchaseMoney();
    console.log(purchaseMoney);
  }

  async #repeatUntilCorrectPurchaseMoney() {
    try {
      const purchaseMoney = await InputView.enterPurchaseMoney();
      PurchaseMoneyValidator.checkValid(purchaseMoney);
      return purchaseMoney;
    } catch (error) {
      return this.#repeatUntilCorrectPurchaseMoney();
    }
  }
}

export default LottoController;
