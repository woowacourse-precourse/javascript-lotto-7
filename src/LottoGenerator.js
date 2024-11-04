import Lotto from './Lotto.js';
import { Random } from '@woowacourse/mission-utils';

class LottoGenerator {
  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6); 
  }

  static generateLottos(count) {
    return Array.from({ length: count }, () => new Lotto(this.generateLottoNumbers()));
  }
}

export default LottoGenerator;