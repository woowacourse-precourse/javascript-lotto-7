import { inputPurchaseAmount } from './view/InputReader.js';
import { createPurchaseAmountValidator } from './validate/ValidatorCreator.js';

const validator = createPurchaseAmountValidator();

class LottoPayment {
  #lottoUnitAmount;

  constructor(lottoUnitAmount) {
    this.#lottoUnitAmount = lottoUnitAmount;
  }

  calculateLottoCountByAmount(purchaseAmount) {
    return purchaseAmount / this.#lottoUnitAmount;
  }

  async getPurchaseAmount() {
    const amount = await inputPurchaseAmount();
    validator.validatePurchaseAmount(amount);

    return amount;
  }
}

export default LottoPayment;