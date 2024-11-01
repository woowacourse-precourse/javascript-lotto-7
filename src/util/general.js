import { MissionUtils } from "@woowacourse/mission-utils";

function generateLottoNumbers(min, max, number) {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, number);
};

export {
  generateLottoNumbers,
};