import { Random } from '@woowacourse/mission-utils';
import LOTTO_RULE from './constant/lotto.js';

class LottoMachine {
  #lottoQuantity;
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  #calculateLottoQuantity(purchaseAmount) {
    return purchaseAmount / LOTTO_RULE.AMOUNT_UNIT;
  }

  #generateLottos(lottoQuantity) {
    for (let i = 0; i < lottoQuantity; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_RULE.LOTTO_NUMBER_RANGE.MIN,
        LOTTO_RULE.LOTTO_NUMBER_RANGE.MAX,
        LOTTO_RULE.LOTTO_NUMBER_LENGTH,
      );
      this.#lottos.push(lotto.sort((a, b) => a - b));
    }
  }

  buyLottos(purchaseAmount) {
    this.#lottoQuantity = this.#calculateLottoQuantity(purchaseAmount);
    this.#generateLottos(this.#lottoQuantity);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
