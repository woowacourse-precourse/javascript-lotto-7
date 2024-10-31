import { MissionUtils } from '@woowacourse/mission-utils';

class LottoMachine {
  static START_NUMBER = 1;
  static NUMBER_COUNT = 6;
  static MAX_NUMBER = 45;

  static #pickRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LottoMachine.START_NUMBER,
      LottoMachine.MAX_NUMBER,
      LottoMachine.NUMBER_COUNT
    );
  }

  static generateLottos(count) {
    return Array.from({ length: count }).map(() =>
      LottoMachine.#pickRandomNumbers()
    );
  }
}

export default LottoMachine;
