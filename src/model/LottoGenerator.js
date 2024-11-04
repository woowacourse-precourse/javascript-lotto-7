import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO } from '../contents/PrizeContents.js';

class LottoGenerator {
  static generateSingleLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBER_COUNT,
    ).sort((a, b) => a - b);
  }

  static generateMultipleLottos(count) {
    return Array.from({ length: count }, LottoGenerator.generateSingleLotto);
  }
}

export default LottoGenerator;
