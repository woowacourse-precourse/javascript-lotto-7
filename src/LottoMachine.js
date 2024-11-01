import { Random } from '@woowacourse/mission-utils';
import LOTTO_RULE from './constant/lotto.js';

class LottoMachine {
  #lottoQuantity;
  #lottos;

  constructor(purchaseAmount) {
    this.#lottoQuantity = this.#calculateLottoQuantity(purchaseAmount);
    this.#lottos = this.#generateLottos();
  }

  #calculateLottoQuantity(purchaseAmount) {
    return purchaseAmount / LOTTO_RULE.AMOUNT_UNIT;
  }

  #generateLottos() {
    const lottoList = [];

    for (let i = 0; i < this.#lottoQuantity; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_RULE.LOTTO_NUMBER_RANGE.MIN,
        LOTTO_RULE.LOTTO_NUMBER_RANGE.MAX,
        LOTTO_RULE.LOTTO_NUMBER_LENGTH,
      );
      lottoList.push(lotto.sort((a, b) => a - b));
    }

    return lottoList;
  }

  getLottoQuantity() {
    return this.#lottoQuantity;
  }
}

export default LottoMachine;
