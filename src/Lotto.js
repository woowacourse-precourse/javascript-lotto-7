import { LOTTO_NUMBER_DELIMITER } from "./libs/constants.js";
import { printResult } from "./libs/utils.js";

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
  }

  join() {
    return `[${this.#numbers.join(LOTTO_NUMBER_DELIMITER)}]`;
  }

  print() {
    printResult(this.join());
  }
}

export default Lotto;
