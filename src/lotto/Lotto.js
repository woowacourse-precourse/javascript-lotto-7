import { LOTTO_JOIN_SEPARATOR, MESSAGES } from '../constants.js';
import { throwError } from '../utils/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_SIX);
    }

    if (numbers.length !== new Set(numbers).size) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_UNIQUE);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throwError(MESSAGES.ERROR.LOTTO_NUMBER.SHOULD_BE_IN_RANGE);
    }
  }

  getMatchedCountWithWinningNumbers(winningNumbers) {
    const matchedNumbers = this.#numbers.filter((number) => winningNumbers.includes(number));

    return matchedNumbers.length;
  }

  isMatchedWithBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  toString() {
    const sortedNumbers = this.#getSortedNumbers();

    return `[${sortedNumbers.join(LOTTO_JOIN_SEPARATOR)}]`;
  }

  #getSortedNumbers() {
    return [...this.#numbers].sort((a, b) => a - b);
  }

  // Method for test
  getSortedNumbersTest() {
    return this.#getSortedNumbers();
  }
}

export default Lotto;
