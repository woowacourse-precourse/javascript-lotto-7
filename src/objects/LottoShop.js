import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../lib/constants.js';
import { Lotto } from './index.js';

class LottoShop {
  static orderLottos(purchasePrice) {
    const lottoCount = purchasePrice / LOTTO.PRICE;
    const lottos = this.#generateLottos(lottoCount);

    return lottos;
  }

  static #generateLottos(lottoCount) {
    const lottos = new Array(lottoCount)
      .fill()
      .map(() => new Lotto(this.#generateLottoNumbers()));

    return lottos;
  }

  static #generateLottoNumbers() {
    const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    );

    return lottoNumbers;
  }
}

export default LottoShop;
