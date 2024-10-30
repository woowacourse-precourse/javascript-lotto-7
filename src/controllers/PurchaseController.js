import Validator from '../Validator.js';
import InputView from '../views/InputView.js';

class PurchaseController {
  #purchaseAmount;

  async getValidatedPurchaseAmount() {
    const inputPurchaseAmount = await InputView.getPurchaseAmount();

    Validator.validatePurchaseAmount(inputPurchaseAmount);
    this.#purchaseAmount = Number(inputPurchaseAmount);

    return this.#purchaseAmount;
  }
}

export default PurchaseController;
