import { Console, Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  printNumberArray() {
    Console.print(this.#numbers);
  }
}

export default Lotto;
