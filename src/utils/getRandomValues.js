import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX, RANDOM_NUMBER_COUNT } from '../constants/numbers.js';

export default function getRandomValues() {
  return Random.pickUniqueNumbersInRange(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX, RANDOM_NUMBER_COUNT);
}
