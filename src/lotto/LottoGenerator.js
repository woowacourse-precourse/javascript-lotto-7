import { Random } from '@woowacourse/mission-utils';
import Lotto from './model/Lotto.js';

class LottoGenerator {
  #numberRange;

  #numberCount;

  constructor(numberCount, numberRange) {
    this.#numberCount = numberCount;
    this.#numberRange = numberRange;
  }

  generateLottosBycount(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const lotto = this.#generateLotto();
      lottos.push(lotto);
    }

    return lottos;
  }

  #generateLotto() {
    const numbers = this.#getNumbers();
    return new Lotto(numbers);
  }

  #getNumbers() {
    const { startNumber, endNumber } = this.#numberRange;

    return Random.pickUniqueNumbersInRange(startNumber, endNumber, this.#numberCount);
  }
}

export default LottoGenerator;