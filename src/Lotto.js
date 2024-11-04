import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO.INVALID_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.LOTTO.DUPLICATE_NUMBER);
    }
  }

  printNumberArray() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getLevel(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    if (matchCount === 6) return 1;
    if (matchCount === 5) {
      if (this.#numbers.includes(bonusNumber)) return 2;
      return 3;
    }
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;

    return 0;
  }
}

export default Lotto;
