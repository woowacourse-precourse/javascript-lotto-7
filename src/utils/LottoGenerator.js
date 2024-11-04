import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_VALUES } from '../constants/values.js';

class LottoGenerator {
  static generateLottos(count) {
    return Array.from({ length: count }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_VALUES.MIN_RANDOM_VALUE,
        LOTTO_VALUES.MAX_RANDOM_VALUE,
        LOTTO_VALUES.LOTTO_COUNT,
      );
      const lotto = new Lotto(numbers);
      return lotto;
    });
  }
}

export default LottoGenerator;
