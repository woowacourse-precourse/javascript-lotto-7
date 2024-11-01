import { ERROR_MESSAGE, LOTTO_INFORMATIONS } from './lib/constants.js';
import {
  getIsAllItemsUnique,
  getIsArrayLengthMatch,
  intersection,
} from './lib/utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;

    this.#validate();
    this.#sortByAscending();
  }

  get numbers() {
    return this.#numbers;
  }

  checkWinning(winningNumbers, bonusNumber) {
    const winningCount = this.#getWinningNumberCount(winningNumbers);
    const isBonusMatch = this.#getIsBonusMatch(bonusNumber);

    const rank = Lotto.#calculateRank(winningCount, isBonusMatch);
    return rank;
  }

  static #calculateRank(winningCount, isBonusMatch) {
    return (
      LOTTO_INFORMATIONS.find(
        (rankObject) =>
          rankObject.winningCount === winningCount &&
          rankObject.isBonusMatch === isBonusMatch,
      )?.rank ?? 0
    );
  }

  #sortByAscending() {
    this.#numbers.sort((a, b) => a - b);
  }

  #validate() {
    if (!getIsArrayLengthMatch(this.#numbers, 6))
      throw new Error(ERROR_MESSAGE.NOT_SIX);
    if (!getIsAllItemsUnique(this.#numbers))
      throw new Error(ERROR_MESSAGE.NOT_UNIQUE);
  }

  #getWinningNumberCount(winningNumbers) {
    return intersection(this.#numbers, winningNumbers).length;
  }

  #getIsBonusMatch(bonusNumber) {
    return intersection(this.#numbers, [bonusNumber]).length > 0;
  }
}

export default Lotto;
