import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { OUTPUT_MESSAGE } from './lib/constant.js';

class LottoManager {
  #lottos = [];

  constructor(buyPrice) {
    this.lottoCounts = buyPrice / 1000;
    this.genenrateLotto(this.lottoCounts);
  }

  genenrateLotto(lottoCounts) {
    Console.print(`${lottoCounts}${OUTPUT_MESSAGE.BUY_COUNT}`);

    for (let i = 0; i < lottoCounts; i++) {
      const lotto = new Lotto(this.pickRandomNumbers());
      lotto.showLottoNumbers();
      this.#lottos.push(lotto.getLottoNumbers());
    }
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoManager;
