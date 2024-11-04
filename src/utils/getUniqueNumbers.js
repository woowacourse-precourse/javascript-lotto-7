import { Random } from '@woowacourse/mission-utils';

export const getUniqueNumbers = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};
