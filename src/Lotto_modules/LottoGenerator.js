import { Random } from '@woowacourse/mission-utils';

class LottoGenerator {
  static generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default LottoGenerator;
