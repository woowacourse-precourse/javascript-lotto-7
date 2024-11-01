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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
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
}

export default Lotto;
