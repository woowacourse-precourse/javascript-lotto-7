import { validateLottoNumbers } from "../utils/validators.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLottoNumbers(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
