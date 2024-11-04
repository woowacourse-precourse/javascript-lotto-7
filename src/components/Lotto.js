import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGES,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
} from "../constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.LENGTH);
    }

    const checkNumber = new Set(
      numbers.filter((num) => typeof num === "number" && !isNaN(num))
    );

    if (checkNumber.size < numbers.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATED_NUMBER);
    }

    checkNumber.forEach((num) => {
      if (
        typeof num !== "number" ||
        num < LOTTO_MIN_NUMBER ||
        num > LOTTO_MAX_NUMBER
      ) {
        throw new Error(ERROR_MESSAGES.NOT_IN_RANGE);
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }

  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

export default Lotto;
