import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBERS } from '../constants/config.js';

class RandomUtil {
  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBERS.LOWER_BOUND,
      LOTTO_NUMBERS.UPPER_BOUND,
      LOTTO_NUMBERS.NUMBER_LENGTH,
    );
  }
}

export default RandomUtil;
