import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../../constants/errorMessages.js";
import { printOneLine } from "../../utils/console.js";
import { errorHandler } from "../../utils/errorHandler.js";
import { generateRandomNum } from "../../utils/generateRandomNum.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      errorHandler(ERROR_MESSAGE.lotto.invalidCount);
    }
    if (new Set(numbers).size !== 6) {
      errorHandler(ERROR_MESSAGE.lotto.isDuplicated);
    }
  }

  orderNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  printNumbers() {
    return `[${String(this.#numbers).split(",").join(", ")}]`;
  }
}

export default Lotto;
