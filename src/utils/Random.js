import { Random } from '@woowacourse/mission-utils';
import { SERVICE_CONSTANTS } from '../constants.js';

class RandomUtil {
  static getRandomNumbers(
    from = SERVICE_CONSTANTS.numberMinBoundary,
    to = SERVICE_CONSTANTS.numberMaxBoundsary,
    count = SERVICE_CONSTANTS.defaultArrayLength,
  ) {
    return Random.pickUniqueNumbersInRange(from, to, count);
  }
}

export default RandomUtil;
