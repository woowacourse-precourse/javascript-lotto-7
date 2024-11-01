import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoBundle {
  #lottoBundle;

  constructor() {
    this.#lottoBundle = [];
  }

  generateLottos(lottoCount) {
    for (let i = 0; i < lottoCount; i += 1) {
      const numbers = LottoBundle.#generateRandomNums();
      const sortedNums = LottoBundle.#sortNumbers(numbers);
      this.#addLotto(sortedNums);
    }
  }

  static #generateRandomNums() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #addLotto(numbers) {
    const lotto = new Lotto(numbers);
    this.#lottoBundle.push(lotto);
  }

  static #sortNumbers(numbers) {
    return [...numbers].sort((first, second) => first - second);
  }

  getLottos() {
    return this.#lottoBundle;
  }
}

export default LottoBundle;
