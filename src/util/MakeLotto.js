import { MissionUtils } from '@woowacourse/mission-utils';

class MakeLotto {
  static make(N) {
    const lotto = [];

    for (let i = 0; i < N; i++) {
      lotto[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }

    return lotto;
  }
}

export default MakeLotto;