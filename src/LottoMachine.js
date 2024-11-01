import LOTTO_RULE from './constant/lotto.js';

class LottoMachine {
  #lottoQuantity;
  #lottos;

  constructor(purchaseAmount) {
    this.#lottoQuantity = this.#calculateLottoQuantity(purchaseAmount);
    this.#lottos = [];
  }

  #calculateLottoQuantity(purchaseAmount) {
    return purchaseAmount / LOTTO_RULE.AMOUNT_UNIT;
  }

  getLottoQuantity() {
    return this.#lottoQuantity;
  }
}

export default LottoMachine;
