import InputUtils from "../utils/InputUtils.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #inputView;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async run() {
    await this.#getLottoPurchaseAmount();
  }

  async #getLottoPurchaseAmount() {
    const purchaseAmount = await this.#validInput(
      () => this.#inputView.inputPurchaseAmount(),
      InputUtils.validatePurchaseAmount
    );

    return purchaseAmount;
  }

  async #validInput(inputFunction, validateFunction) {
    while (true) {
      try {
        const input = await inputFunction();
        const trimmedInput = InputUtils.trimInput(input);
        validateFunction(trimmedInput);
        return trimmedInput;
      } catch (error) {
        this.#outputView.errorOccurred(error);
      }
    }
  }
}

export default LottoController;
