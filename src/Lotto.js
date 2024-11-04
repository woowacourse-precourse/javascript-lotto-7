import { Console } from "@woowacourse/mission-utils";
import { Messages, Settings } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== Settings.NUMBER_COUNT) {
      throw new Error(Messages.ERROR.PREFIX + Messages.LOTTO.COUNT);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(Messages.ERROR.PREFIX + Messages.LOTTO.UNIQUE);
    }
  }

  printNumbers() {
    Console.print(Messages.LOTTO.PRINT(this.#numbers.join(", ")));
  }

  matchNumbers(targetNumbers) {
    let cnt = 0;
    this.#numbers.forEach((number) => {
      if (targetNumbers.includes(number)) {
        cnt += 1;
      }
    });
    return cnt;
  }
}

export default Lotto;
