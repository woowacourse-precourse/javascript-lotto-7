import { Console, Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default Lotto;
