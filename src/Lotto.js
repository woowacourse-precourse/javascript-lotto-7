import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import { intersection } from './lib/utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  getRankObject(winningNumberArray, bonusNumber) {
    const winningCount = this.#getWinningNumberCount(winningNumberArray);
    const isBonusMatch = Boolean(this.#getIsBonusMatch(bonusNumber));

    const currentRankObject = RANK_OBJECT_ARRAY.find(
      (rankObject) =>
        rankObject.winningCount === winningCount &&
        rankObject.isBonusMatch === isBonusMatch,
    );

    return currentRankObject;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);
  }

  #getWinningNumberCount(winningNumberArray) {
    return intersection(this.#numbers, winningNumberArray).length;
  }

  #getIsBonusMatch(bonusNumber) {
    return intersection(this.#numbers, [bonusNumber]).length;
  }

  printNumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
}

export default Lotto;
