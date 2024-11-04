import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_SETTING } from "../constants/Settings.js";

export function generateLottoNumbers() {
  const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
    LOTTO_SETTING.MIN_NUMBER,
    LOTTO_SETTING.MAX_NUMBER,
    LOTTO_SETTING.LOTTO_NUMBER_LENGTH
  );
  return lottoNumbers.sort((a, b) => a - b);
}
