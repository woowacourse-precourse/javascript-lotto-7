import Validator from '../Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class PurchaseController {
  #purchaseAmount;

  async getValidatedPurchaseAmount() {
    try {
      const inputPurchaseAmount = await InputView.getPurchaseAmount();

      Validator.validatePurchaseAmount(inputPurchaseAmount);
      this.#purchaseAmount = Number(inputPurchaseAmount);

      return this.#purchaseAmount;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getValidatedPurchaseAmount();
    }
  }
}

export default PurchaseController;
