import {
  validateLottoAmountRule,
  validateLottoNumberRule
} from '../LottoValidator.js';

class LottoRule {
  #lottoAmount;

  #maxlottoPurchaseAmount;

  #lottoNumberCount;

  #lottoNumberRange;

  constructor(lottoConfig) {
    this.#lottoAmount = lottoConfig.LOTTO_AMOUNT;
    this.#maxlottoPurchaseAmount = lottoConfig.MAX_PURCHASE_AMOUNT;
    this.#lottoNumberCount = lottoConfig.NUMBER_COUNT;
    this.#lottoNumberRange = {
      startNumber: lottoConfig.NUMBER_MIN_VALUE,
      endNumber: lottoConfig.NUMBER_MAX_VALUE,
    }

    this.#validateRuleValue();
  }

  #validateRuleValue() {
    validateLottoAmountRule(this.#lottoAmount, this.#maxlottoPurchaseAmount);

    const { startNumber, endNumber } = this.#lottoNumberRange;
    validateLottoNumberRule(this.#lottoNumberCount, startNumber, endNumber);
  }

  get lottoAmount() {
    return this.#lottoAmount;
  }

  get maxlottoPurchaseAmount() {
    return this.#maxlottoPurchaseAmount;
  }

  get lottoNumberCount() {
    return this.#lottoNumberCount;
  }

  get lottoNumberRange() {
    return this.#lottoNumberRange;
  }
}

export default LottoRule;
