// Lotto.js
import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers =
      Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
