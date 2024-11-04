import { ERROR_MESSAGES } from './Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_LOTTO_NUMBERS);
    }
  }

  get numbers() {
    return [...this.#numbers];
  }

  checkWinningStatus(winningNumbers, bonusNumber) {
    let matchCount = 0;
    let hasBonus = false;
    this.numbers.forEach((number) => {
      if (winningNumbers.includes(number)) matchCount++;
      if (bonusNumber === number) hasBonus = true;
    });

    return { matchCount, hasBonus };
  }
}

export default Lotto;
