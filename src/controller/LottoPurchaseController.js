import PurchaseDTO from "../dto/PurchaseDTO.js";
import LottoMachine from "../models/LottoMachine.js";
import PurchaseMoneyValidator from "../validators/PurchaseMoneyValidator.js";

class LottoPurchaseController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async purchaseLotto() {
    const purchaseMoney = await this.#repeatUntilValidInput(() => this.#getPurChaseMoney());
    const purchaseHistory = this.#purchaseLotto(purchaseMoney);

    const purchaseDTO = PurchaseDTO.from(purchaseHistory);
    this.#outputView.printPurchaseInfo(purchaseDTO);
    return purchaseHistory;
  }

  async #getPurChaseMoney() {
    const purchaseMoney = await this.#inputView.enterPurchaseMoney();
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
      this.#outputView.printError(error.message);
      return this.#repeatUntilValidInput(callback);
    }
  }
}

export default LottoPurchaseController;
