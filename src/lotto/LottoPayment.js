import { inputPurchaseAmount } from './view/InputReader.js';
import { createPurchaseAmountValidator } from './validate/ValidatorCreator.js';
import { retryIfOccurredError } from './RetryHelper.js';

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
    const amount = await retryIfOccurredError(
      async () => {
        const inputAmount = await inputPurchaseAmount();
        validator.validatePurchaseAmount(inputAmount);

        return inputAmount;
      }
    );
    return amount;
  }
}

export default LottoPayment;