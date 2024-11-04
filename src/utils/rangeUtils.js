import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/constant.js';

export const getNumbersInRange = (
  min = LOTTO.MIN_NUM,
  max = LOTTO.MAX_NUM,
  length = LOTTO.LENGTH
) => {
  return Random.pickUniqueNumbersInRange(min, max, length);
};

export const isWithinRange = (
  num,
  min = LOTTO.MIN_NUM,
  max = LOTTO.MAX_NUM
) => {
  return num >= min && num <= max;
};
