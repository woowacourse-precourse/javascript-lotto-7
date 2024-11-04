import LottoMachine from "../models/LottoMachine.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoPurchaseController {
  async purchaseLotto() {
    const purchaseMoney = await this.#repeatUntilValidInput(() => this.#getPurChaseMoney());
    const purchaseHistory = this.#purchaseLotto(purchaseMoney);

    OutputView.printPurchaseInfo(purchaseHistory.lottoCount, purchaseHistory.lottos);
    return purchaseHistory;
  }

  async #getPurChaseMoney() {
    const purchaseMoney = await InputView.enterPurchaseMoney();
    PurchaseMoneyValidator.checkValid(purchaseMoney);
    return purchaseMoney;
  }

  #purchaseLotto(purchaseMoney) {
    const lottoMachine = new LottoMachine(purchaseMoney);
    const lottoHistory = lottoMachine.generateLotto();
    return lottoHistory.getPurchaseHistory();
  }

  async #repeatUntilValidInput(callback) {
    try {
      return await callback();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#repeatUntilValidInput(callback);
    }
  }
}

export default LottoPurchaseController;
