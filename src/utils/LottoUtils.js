import { MissionUtils } from "@woowacourse/mission-utils";

export const generateRandomNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
};
