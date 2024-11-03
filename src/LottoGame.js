import Lotto from "./Lotto.js";
import { Random } from '@woowacourse/mission-utils';

class LottoGame {
  constructor() {
    this.lottos = [];
    this.winningNumbers = [];
  }

  generateLotto(count) {
    for(let i = 0; i < count; i++) {
      this.lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return this.lottos;
  }
}
export default LottoGame;
