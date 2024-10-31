import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO_INFORMATION_ARRAY } from './lib/constants.js';
import { intersection } from './lib/utils.js';

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = this.#generateLotto();

    this.#validate();
    this.#sortByAscending();
  }

  get numbers() {
    return this.#numbers;
  }

  #generateLotto() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  checkWinning(winningNumberArray, bonusNumber) {
    const winningCount = this.#getWinningNumberCount(winningNumberArray);
    const isBonusMatch = this.#getIsBonusMatch(bonusNumber);

    const rank = this.#calculateRank(winningCount, isBonusMatch);
    return rank;
  }

  #calculateRank(winningCount, isBonusMatch) {
    return (
      LOTTO_INFORMATION_ARRAY.find(
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
    if (this.#numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);
  }

  #getWinningNumberCount(winningNumberArray) {
    return intersection(this.#numbers, winningNumberArray).length;
  }

  #getIsBonusMatch(bonusNumber) {
    return intersection(this.#numbers, [bonusNumber]).length > 0;
  }
}

export default Lotto;
