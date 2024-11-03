import { LOTTO } from './constants/lotto.js';
import { ERROR_MESSAGE } from './constants/message.js';
import Util from './Util.js';
import Validate from './Validate.js';

class Lotto {
  #numbers;
  static winnings = [
    { rank: 5, basicCount: 3, bonusCount: 0, prize: 5000 },
    { rank: 4, basicCount: 4, bonusCount: 0, prize: 50000 },
    { rank: 3, basicCount: 5, bonusCount: 0, prize: 1500000 },
    { rank: 2, basicCount: 5, bonusCount: 1, prize: 30000000 },
    { rank: 1, basicCount: 6, bonusCount: 0, prize: 2000000000 },
  ];

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Validate.arrayCount(numbers, LOTTO.BASIC_COUNT))
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_COUNT_IS_NOT_BASIC_COUNT);

    if (!Validate.uniqueArray(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_NOT_UNIQUE);

    if (!Validate.numbers(numbers)) throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_IS_NOT_NUMBER);
  }

  // TODO: 추가 기능 구현
  static getWinnings() {
    return Lotto.winnings;
  }

  static getWinningByRank(rank) {
    const winning = Lotto.getWinnings().find(winning => winning.rank === rank);

    return winning;
  }

  win(winningNumbers, bonusNumber) {
    const { basicMatch, bonusMatch } = this.#getMatch(winningNumbers, bonusNumber);
    const winning = this.#getWinningByMatch(basicMatch, bonusMatch);

    return winning;
  }

  #getMatch(winningNumbers, bonusNumber) {
    const basicMatch = Util.filterByTargetArrayMatch(this.#numbers, winningNumbers).length;
    const bonusMatch = Util.filterByTargetMatch(this.#numbers, bonusNumber).length;

    return {
      basicMatch,
      bonusMatch,
    };
  }

  #getWinningByMatch(basicMatch, bonusMatch) {
    const filteredWinnings = Lotto.getWinnings().filter(
      winning => winning.basicCount === basicMatch && winning.bonusCount <= bonusMatch
    );

    return filteredWinnings.sort((a, b) => a.rank - b.rank)[0] ?? null;
  }
}

export default Lotto;
