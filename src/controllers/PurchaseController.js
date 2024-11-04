import PurchaseAmountValidator from '../validators/PurchaseAmountValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class PurchaseController {
  #purchaseAmount;

  /**
   * 유효성을 검사한 구입 금액을 반환한다.
   * @returns {Promise<number>} 유효한 구입 금액
   */
  async getValidatedPurchaseAmount() {
    try {
      const inputPurchaseAmount = await InputView.getPurchaseAmount();

      PurchaseAmountValidator.validate(inputPurchaseAmount);
      this.#purchaseAmount = Number(inputPurchaseAmount);

      return this.#purchaseAmount;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getValidatedPurchaseAmount();
    }
  }
}

export default PurchaseController;
