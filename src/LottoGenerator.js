import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from './constant.js';

class LottoGenerator {
  #lottoCount;
  #lottos;
  constructor(purchasePrice) {
    this.#lottoCount = Math.floor(purchasePrice / LOTTO.PRICE);
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
    this.#lottos.forEach((lotto) => Console.print(this.sortLotto(lotto)));
    Console.print('\n');
  }
}

export default LottoGenerator;
