import InputUtils from "../utils/InputUtils.js";
import InputView from "../view/InputView.js";

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async run() {
    await this.#getLottoPurchaseAmount();
  }

  async #getLottoPurchaseAmount() {
    const purchaseAmount = await this.#inputView.inputPurchaseAmount();
    const trimPurchaseAmount = InputUtils.trimInput(purchaseAmount);
    InputUtils.validatePurchaseAmount(trimPurchaseAmount);
    return trimPurchaseAmount;
  }
}

export default LottoController;
