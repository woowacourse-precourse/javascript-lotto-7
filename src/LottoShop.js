import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoShop {
  #LOTTO_PRICE = 1_000;
  #MIN_LOTTO_NUMBER = 1;
  #MAX_LOTTO_NUMBER = 45;
  #COUNT_LOTTO_NUMBER = 6;

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
      this.#MIN_LOTTO_NUMBER,
      this.#MAX_LOTTO_NUMBER,
      this.#COUNT_LOTTO_NUMBER,
    );

    return lotto;
  }
}

export default LottoShop;
