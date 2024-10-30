import { ERROR_MESSAGE, RANK_OBJECT_ARRAY } from './lib/constants.js';
import { intersection } from './lib/utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) throw new Error(ERROR_MESSAGE.NOT_SIX);
  }

  #getWinningCount(winningNumberArray) {
    return intersection(this.#numbers, winningNumberArray).length;
  }

  #getIsWinningBonus(bonusNumber) {
    return intersection(this.#numbers, [bonusNumber]).length;
  }

  getRankObject(winningNumberCount, bonusNumber) {
    const winningCount = this.#getWinningCount(winningNumberCount);
    const isWinningBonus = Boolean(this.#getIsWinningBonus(bonusNumber));

    const currentRankObject = RANK_OBJECT_ARRAY.find(
      (rankObject) =>
        rankObject.winningCount === winningCount &&
        rankObject.isBonusMatch === isWinningBonus,
    );

    return currentRankObject;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
