import { MissionUtils } from "@woowacourse/mission-utils";

const generateLandomNumber = (start, end, count) => {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
    start,
    end,
    count
  );
  return numbers.sort((a, b) => a - b);
};

export default generateLandomNumber;
