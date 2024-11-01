import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO } from './lib/constants.js';

class LottoShop {
  #LOTTO_PRICE = 1_000;

  orderLottos(purchasePrice) {
    const lottoCount = purchasePrice / this.#LOTTO_PRICE;
    const lottos = LottoShop.#generateLottos(lottoCount);

    return lottos;
  }

  static #generateLottos(lottoCount) {
    const lottos = new Array(lottoCount).fill().map(() => {
      const lottoNumbers = LottoShop.#generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      return lotto;
    });

    return lottos;
  }

  static #generateLottoNumbers() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    );

    return lotto;
  }
}

export default LottoShop;
