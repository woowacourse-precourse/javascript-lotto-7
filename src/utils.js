import { MissionUtils } from "@woowacourse/mission-utils";

class Utils {
  randomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }
}

export default Utils;
