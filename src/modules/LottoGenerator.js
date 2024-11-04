import { Random } from "@woowacourse/mission-utils";

class LottoGenerator {
  static generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoGenerator; // default export 사용
