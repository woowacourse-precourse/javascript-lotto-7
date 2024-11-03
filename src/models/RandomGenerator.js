import { Random } from "@woowacourse/mission-utils";

class RandomGenerator {
  static generate(minRange, maxRange, pickCount) {
    return Random.pickUniqueNumbersInRange(minRange, maxRange, pickCount);
  }
}

export default RandomGenerator;
