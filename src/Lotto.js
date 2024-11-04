import { validateNumbers } from "./utils/validation.js";
import { PRIZE } from "./utils/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    validateNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  match(winningNumbers, bonusNumber) {
    const matchCount = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;

    const hasBonus =
      matchCount === PRIZE.SECOND.MATCH && this.#numbers.includes(bonusNumber);

    return { matchCount, hasBonus };
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
