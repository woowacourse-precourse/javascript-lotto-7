import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

class LottoGenerator {
  static generateLottos(count) {
    return Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);
      return lotto;
    });
  }
}

export default LottoGenerator;
