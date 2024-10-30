import { RANK_OBJECT_ARRAY } from './lib/constants.js';
import { intersection } from './lib/utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
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
