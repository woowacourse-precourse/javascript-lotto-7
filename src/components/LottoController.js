import { Console } from '@woowacourse/mission-utils';
import { InputPrompts } from '../resources/Constants.js';
import purchaseAmountValidator from '../validation/purchaseAmountValidator.js';

class LottoController {
  #purchaseAmount;

  getPurchaseAmount() {
    return this.#purchaseAmount;
  }

  setPurchaseAmount(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  async promptPurchaseAmount() {
    const newPurchaseAmount = await Console.readLineAsync(
      InputPrompts.purchaseAmount,
    );

    purchaseAmountValidator(newPurchaseAmount);
    this.setPurchaseAmount(newPurchaseAmount);
  }
}

export default LottoController;
