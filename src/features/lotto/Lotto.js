import { printOneLine } from "../../utils/console.js";
import { generateRandomNum } from "../../utils/generateRandomNum.js";

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

  get numbers() {
    return this.#numbers;
  }

  orderNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
