import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGenerator {
  static generateSingleLotto() {
    // 1부터 45 사이의 숫자 중 6개의 고유 숫자를 랜덤으로 선택
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b,
    );
  }

  static generateMultipleLottos(count) {
    return Array.from({ length: count }, () => this.generateSingleLotto());
  }
}

export default LottoGenerator;
