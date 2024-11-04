import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO_PRICE } from './constant.js';

/**
 *
 */
class LottoController {
  #lottos;

  /**
   *
   */
  constructor(amount) {
    const lottoSize = amount / LOTTO_PRICE;
    this.#lottos = Array.from(
      { length: lottoSize },
      () => new Lotto(this.generateLotto())
    );
  }

  /**
   *
   */
  generateLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoController;
