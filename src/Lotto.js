import { checkDuplicate, checkWinNumbers } from "./feature/validate/checkWinNumber.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    checkWinNumbers(numbers);
    checkDuplicate(numbers);
  }

  #sortNumbers(numbers) {
    const SORTED_NUMBERS = [...numbers].sort((a, b) => a - b);
    return SORTED_NUMBERS;
  }

  get getWinNumber() {
    return this.#numbers;
  }
}

export default Lotto;
