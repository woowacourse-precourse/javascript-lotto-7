import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGenerator {
  static generateSingleLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
  }

  static generateMultipleLottos(count) {
    return Array.from({ length: count }, LottoGenerator.generateSingleLotto);
  }
}

export default LottoGenerator;
