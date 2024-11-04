import { Random } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (numbers) {
      this.validateNumbers(numbers);
      this.#numbers = numbers.sort(
        (a, b) => a - b
      );
    } else {
      this.#numbers =
        Random.pickUniqueNumbersInRange(
          1,
          45,
          6
        ).sort((a, b) => a - b);
    }
  }

  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR]");
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR]");
    }

    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR]");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
