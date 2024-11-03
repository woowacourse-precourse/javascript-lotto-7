import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_NUMBER } from "./constants/error.js";
import { winningNumberRegex } from "./regex/index.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_NUMBER.LENGTH);
    }

    numbers.forEach((number) => {
      if (!winningNumberRegex.test(number))
        throw new Error(LOTTO_NUMBER.EXCEPT_COMMA);
    });
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printNumbers() {
    Console.print(this.#numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
