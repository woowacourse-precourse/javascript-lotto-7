import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { LOTTO } from './lib/constants.js';

class LottoShop {
  #LOTTO_PRICE = 1_000;

  orderLottos(purchasePrice) {
    const lottoCount = purchasePrice / this.#LOTTO_PRICE;
    const lottos = this.#generateLottos(lottoCount);

    return lottos;
  }

  #generateLottos(lottoCount) {
    const lottos = new Array(lottoCount).fill().map(() => {
      const lottoNumbers = this.#generateLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      return lotto;
    });

    return lottos;
  }

  #generateLottoNumbers() {
    const lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    );

    return lotto;
  }
}

export default LottoShop;
