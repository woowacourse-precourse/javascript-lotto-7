import { MissionUtils } from "@woowacourse/mission-utils";

export function generateLottoNumbers() {
  const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumbers.sort((a, b) => a - b);
}
