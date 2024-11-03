import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBER } from './shared/index.js';

class LottoMachine {
  static #pickRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.MIN,
      NUMBER.MAX,
      NUMBER.VALID_LENGTH
    );
  }

  static generateLottos(count) {
    return Array.from({ length: count }).map(() =>
      LottoMachine.#pickRandomNumbers()
    );
  }
}

export default LottoMachine;
