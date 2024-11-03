import { MissionUtils } from "@woowacourse/mission-utils";

export const generateRandomNum = (count) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, count);
};
