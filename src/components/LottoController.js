import { Console } from '@woowacourse/mission-utils';
import { InputPrompts } from '../resources/Constants.js';

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
    this.setPurchaseAmount(newPurchaseAmount);
  }
}
export default LottoController;
