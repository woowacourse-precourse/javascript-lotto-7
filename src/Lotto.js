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
    try {
      if (numbers.length !== 6) {
        throw new Error(LOTTO_NUMBER.LENGTH);
      }

      this.checkDuplication(numbers);

      numbers.forEach((number) => {
        if (!winningNumberRegex.test(number))
          throw new Error(LOTTO_NUMBER.EXCEPT_COMMA);
      });
    } catch (error) {
      Console.print(error.message);
      throw new Error(error.message);
    }
  }

  checkDuplication(numbers) {
    const numberSet = new Set(numbers);

    if (numbers.length !== numberSet.size) {
      throw new Error(LOTTO_NUMBER.DUPLICATION);
    }
  }

  static generateRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
