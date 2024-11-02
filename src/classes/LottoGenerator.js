import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from '../constant.js';

class LottoGenerator {
  #lottoCount;
  #lottos;
  constructor(purchasePrice) {
    this.#lottoCount = Math.floor(purchasePrice / LOTTO_PRICE);
  }

  // #validate(purchasePrice) {

  // }

  #createLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createLotto() {
    this.#lottos = Array(this.#lottoCount)
      .fill()
      .map(() => this.#createLottoNumber());
  }

  sortLotto(lottos) {
    return lottos.sort((a, b) => a - b);
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  getLottoNumbers() {
    return this.#lottos.map((lotto) => this.sortLotto(lotto));
  }
}

export default LottoGenerator;
