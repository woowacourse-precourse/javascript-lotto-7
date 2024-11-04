import { Random } from '@woowacourse/mission-utils';
import { LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX, LOTTO_NUMBER_COUNT } from '../constants/numbers.js';

export default function getRandomValues() {
  return Random.pickUniqueNumbersInRange(LOTTO_NUMBER_MIN, LOTTO_NUMBER_MAX, LOTTO_NUMBER_COUNT);
}
