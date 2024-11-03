import { Random } from '@woowacourse/mission-utils';

export const getRandomNumbersInRange = (start, end, count) =>
  Random.pickUniqueNumbersInRange(start, end, count);
