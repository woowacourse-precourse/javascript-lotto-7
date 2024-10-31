import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import { intersection } from './lib/utils.js';
import Rank from './Rank.js';

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = this.#generateNumbers();
    this.#validate();
    this.#sortByAscending();
  }

  get numbers() {
    return this.#numbers;
  }

  #generateNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #sortByAscending() {
    this.#numbers.sort((a, b) => a - b);
  }

  #validate() {
    if (this.#numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);
  }

  draw(winningNumberArray, bonusNumber) {
    const winningCount = this.#getWinningNumberCount(winningNumberArray);
    const isBonusMatch = Boolean(this.#getIsBonusMatch(bonusNumber));

    return Rank.getRank(winningCount, isBonusMatch);
  }

  #getWinningNumberCount(winningNumberArray) {
    return intersection(this.#numbers, winningNumberArray).length;
  }

  #getIsBonusMatch(bonusNumber) {
    return intersection(this.#numbers, [bonusNumber]).length;
  }
}

export default Lotto;
