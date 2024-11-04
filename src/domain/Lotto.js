import { ERORR_MESSAGE } from "../constants/messages.js";
import sortAscending from "../utils/sort.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = sortAscending(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERORR_MESSAGE.MAX_NUMBER_COUNT);
    }
    if (numbers.some((number, index) => numbers.indexOf(number) !== index)) {
      throw new Error(ERORR_MESSAGE.DUPLICATE);
    }
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      throw new Error(ERORR_MESSAGE.OUT_OF_RANGE);
    }
  }

  checkCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
