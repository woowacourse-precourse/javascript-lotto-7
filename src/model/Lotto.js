import { RANK } from '../constants/constants.js';
import Validator from '../validator/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #getMatchCount(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  getMatchCount({ winningNumbers, bonusNumber }) {
    const matchCount = this.#getMatchCount(winningNumbers);
    return this.#determineMatchCount(matchCount, bonusNumber);
  }

  #hasBonusMatch(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  #determineMatchCount(matchCount, bonusNumber) {
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
