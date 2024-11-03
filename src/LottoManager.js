import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoManager {
  constructor(buyPrice) {
    this.lottoCounts = buyPrice / 1000;
    this.genenrateLotto(this.lottoCounts);
    this.lotto = [];
  }

  genenrateLotto(lottoCounts) {
    Console.print(`\n${lottoCounts}개를 구매했습니다.`);
    for (let i = 0; i < lottoCounts; i++) {
      const lotto = new Lotto(this.pickRandomNumbers());
      lotto.getLottoNumbers();
    }
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoManager;
