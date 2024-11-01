import { inputPurchaseAmount } from './view/InputReader.js';
import { createPurchaseAmountValidator } from './validate/ValidatorCreator.js';

const validator = createPurchaseAmountValidator();

class LottoPayment {
  #lottoUnitAmount;

  constructor(lottoUnitAmount) {
    this.#lottoUnitAmount = lottoUnitAmount;
  }

  async executePaymentAndGetLottoCount() {
    const purchaseAmount = await this.#getPurchaseAmount();
    return this.#calculateLottoCountByAmount(purchaseAmount);
  }

  async #getPurchaseAmount() {
    const amount = await inputPurchaseAmount();
    validator.validatePurchaseAmount(amount);

    return amount;
  }

  #calculateLottoCountByAmount(purchaseAmount) {
    return purchaseAmount / this.#lottoUnitAmount;
  }
}

export default LottoPayment;