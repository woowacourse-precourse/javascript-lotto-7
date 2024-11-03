import { MissionUtils } from '@woowacourse/mission-utils';

const getRandomUniqueNumbers = (start, end, count) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
};

export default getRandomUniqueNumbers;
