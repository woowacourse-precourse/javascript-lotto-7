import { MissionUtils } from '@woowacourse/mission-utils';
import {
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
} from '../constant.js';

class LottoGenerator {
  #lottoCount;
  #lottos;
  constructor(purchasePrice) {
    this.#lottoCount = this.#calculateLottoCount(purchasePrice);
  }

  #calculateLottoCount(purchasePrice) {
    return Math.floor(purchasePrice / LOTTO_PRICE);
  }

  #generateLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_MIN_NUMBER,
      LOTTO_MAX_NUMBER,
      LOTTO_LENGTH
    );
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  generateLottos() {
    this.#lottos = Array(this.#lottoCount)
      .fill()
      .map(() => this.#generateLottoNumber());
  }

  sortLotto(lottos) {
    return lottos.sort((a, b) => a - b);
  }

  getLottos() {
    return this.#lottos.map((lotto) => this.sortLotto(lotto));
  }
}

export default LottoGenerator;
