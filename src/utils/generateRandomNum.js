import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_RANGE } from "../constants/lotto.js";

export const generateRandomNum = (count) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_RANGE.min,
    LOTTO_RANGE.max,
    count
  );
};
