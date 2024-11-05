import { NONE } from "./constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  matchingWinning(winningNumbers) {
    let correct = NONE;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) return correct++;
    });

    return correct;
  }

  matchingBonus(bonusNumber) {
    return this.#numbers.some((number) => number === bonusNumber);
  }
}

export default Lotto;
