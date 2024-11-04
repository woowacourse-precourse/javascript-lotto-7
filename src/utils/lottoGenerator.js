import { MissionUtils } from '@woowacourse/mission-utils';

export default function lottoGenerator(min = 1, max = 45, length = 6) {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, length);
}
