import { Random } from "@woowacourse/mission-utils";
import { LOTTO_VALUES } from "../constants/message.js";

export const randomNumber = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO_VALUES.MIN,
    LOTTO_VALUES.MAX,
    LOTTO_VALUES.COUNT
  );
};
