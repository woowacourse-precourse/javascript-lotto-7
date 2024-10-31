import { getPurchaseAmount } from './view/InputReader.js';
import { validatePurchaseAmount } from './LottoValidator.js';

class LottoPaymentExecutor {
  #lottoAmount;

  #maxPurchaseAmount;

  constructor({ lottoAmount, maxPurchaseAmount }) {
    this.#lottoAmount = lottoAmount;
    this.#maxPurchaseAmount = maxPurchaseAmount;
  }

  async executePaymentAndGetLottoCount() {
    const purchaseAmount = await this.#getPurchaseAmount();
    return this.#calculateLottoCountByAmount(purchaseAmount);
  }

  async #getPurchaseAmount() {
    const amount = await getPurchaseAmount();
    validatePurchaseAmount(amount, this.#maxPurchaseAmount, this.#lottoAmount);

    return amount;
  }

  #calculateLottoCountByAmount(purchaseAmount) {
    return purchaseAmount / this.#lottoAmount;
  }
}

export default LottoPaymentExecutor;