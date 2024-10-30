import {
  validateLottoAmountRule,
  validateLottoNumberRule
} from '../LottoValidator.js';

class LottoRule {
  #lottoPurchaseAmount;

  #maxlottoPurchaseAmount;

  #lottoNumberCount;

  #lottoNumberScope;

  constructor(lottoConfig) {
    this.#lottoPurchaseAmount = lottoConfig.PURCHASE_AMOUNT;
    this.#maxlottoPurchaseAmount = lottoConfig.MAX_PURCHASE_AMOUNT;
    this.#lottoNumberCount = lottoConfig.NUMBER_COUNT;
    this.#lottoNumberScope = {
      minNumber: lottoConfig.NUMBER_MIN_VALUE,
      maxNumber: lottoConfig.NUMBER_MAX_VALUE,
    }

    this.#validateRuleValue();
  }

  #validateRuleValue() {
    validateLottoAmountRule(this.#lottoPurchaseAmount, this.#maxlottoPurchaseAmount);

    const { minNumber, maxNumber } = this.#lottoNumberScope;
    validateLottoNumberRule(this.#lottoNumberCount, minNumber, maxNumber);
  }

}

export default LottoRule;
