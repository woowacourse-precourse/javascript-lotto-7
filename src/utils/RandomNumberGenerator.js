import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/Constants.js";

export const RandomNumberGenerator = async () =>
  await Random.pickUniqueNumbersInRange(
    LOTTO.ARRANGE_START,
    LOTTO.ARRANGE_END,
    LOTTO.TOTAL_NUMBERS
  );
