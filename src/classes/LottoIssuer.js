import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoIssuer {
  static LOTTO_PRICE = 1000;

  static generateLottos(purchaseAmount) {
    return Array.from(
      { length: this.#calculateLottoCount(purchaseAmount) },
      () => new Lotto(this.#generateLottoNumbers())
    );
  }

  static #calculateLottoCount(purchaseAmount) {
    const lottoCount = purchaseAmount / this.LOTTO_PRICE;

    return lottoCount;
  }

  static #generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );

    return numbers;
  }
}

export default LottoIssuer;
