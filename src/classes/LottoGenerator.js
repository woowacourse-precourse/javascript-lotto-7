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
  #purchasePrice;
  constructor(purchasePrice) {
    this.#validate(purchasePrice);
    this.#purchasePrice = purchasePrice;
    this.#lottoCount = this.#calculateLottoCount(purchasePrice);
  }

  #validate(purchasePrice) {
    if (purchasePrice <= 0 || isNaN(purchasePrice)) {
      throw new Error('[ERROR] 구입금액은 양수여야 합니다.');
    }

    if (purchasePrice % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.');
    }
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

  get purchasePrice() {
    return this.#purchasePrice;
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
