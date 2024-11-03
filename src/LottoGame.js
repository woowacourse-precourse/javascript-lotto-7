import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  constructor(quantity) {
    this.quantity = quantity;
    this.lottos = this.createLottos();
  }

  createLottos() {
    return Array.from(
      { length: this.quantity },
      () => new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
    );
  }

  start() {
    this.displayLottos();
  }

  displayLottos() {
    Console.print(`\n${this.quantity}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => Console.print(lotto.numbers));
  }
}

export default LottoGame;
