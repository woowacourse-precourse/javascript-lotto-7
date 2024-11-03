import { isNotDuplicated } from "../validator/lottoValidator.js";

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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    isNotDuplicated(numbers);
  }

  orderNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  printNumbers() {
    return `[${String(this.#numbers).split(",").join(", ")}]`;
  }

  countLottoMatches(number) {
    return number.reduce((acc, cur) => {
      if (this.#numbers.includes(cur)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }
}

export default Lotto;
