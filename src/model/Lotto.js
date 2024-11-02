import { RANK } from '../constants/constants.js';
import { validateLottoNumbers } from '../util/validators.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validateLottoNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #getMatchCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  #hasBonusMatch(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getMatchCount({ winningNumbers, bonusNumber }) {
    const matchCount = this.#getMatchCount(winningNumbers);

    if (
      matchCount === RANK.THIRD.matchCount &&
      this.#hasBonusMatch(bonusNumber)
    ) {
      return RANK.SECOND.matchCount;
    }

    return matchCount;
  }
}

export default Lotto;
