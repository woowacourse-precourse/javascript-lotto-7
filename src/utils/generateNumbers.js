import { MissionUtils } from "@woowacourse/mission-utils";

const generateNumbers = (min, max, count) => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(min, max, count);

  return numbers.sort((a, b) => a - b);
};

export default generateNumbers;
