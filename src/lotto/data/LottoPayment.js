import { createPurchaseAmountValidator } from '../validate/ValidatorCreator.js';
import lottoConfig from '../../config.js';

const validator = createPurchaseAmountValidator();
const unitAmount = Object.freeze(lottoConfig.LOTTO_AMOUNT);

class LottoPayment {
  #purchaseAmount;

  #purchaseLottoCount;

  constructor(purchaseAmount) {
    validator.validatePurchaseAmount(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#purchaseLottoCount = this.#calculateLottoCountByPurchaseAmount();
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }

  get purchaseLottoCount() {
    return this.#purchaseLottoCount;
  }

  #calculateLottoCountByPurchaseAmount() {
    return this.#purchaseAmount / unitAmount;
  }
}

export default LottoPayment;