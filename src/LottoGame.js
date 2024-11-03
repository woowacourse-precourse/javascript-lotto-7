import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  constructor(quantity) {
    this.quantity = quantity;
    this.lottos = this.play();
  }

  play() {
    return Array.from(
      { length: this.quantity },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }
}

export default LottoGame;
