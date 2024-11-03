import { Random } from '@woowacourse/mission-utils';
import { RANDOM_CONFIG } from '../constant/config.js';

export function getUniqueNumbersInRange(
  startNum = RANDOM_CONFIG.START_NUMBER,
  endNum = RANDOM_CONFIG.END_NUMBER,
  amount = RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT
) {
  return Random.pickUniqueNumbersInRange(startNum, endNum, amount);
}
