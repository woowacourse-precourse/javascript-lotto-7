import { MATCH_CODE } from '../constants/constants.js';

class LottoStatistics {
  #matchResults;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#matchResults = new Map([
      [MATCH_CODE.THREE, 0],
      [MATCH_CODE.FOUR, 0],
      [MATCH_CODE.FIVE, 0],
      [MATCH_CODE.FIVE_WITH_BONUS, 0],
      [MATCH_CODE.SIX, 0],
    ]);
    this.#setMatchResults(lottos, winningNumbers, bonusNumber);
  }

  getMatchResults() {
    return this.#matchResults;
  }

  #isMatch(lotto, number) {
    return lotto.some((lottoNumber) => lottoNumber === number);
  }

  #countLottoMatches(lotto, winningNumbers) {
    let count = 0;
    winningNumbers.forEach((winningNumber) => {
      if (this.#isMatch(lotto, winningNumber)) count += 1;
    });
    return count;
  }

  #checkBonusMatch(lotto, bonusNumber) {
    if (this.#isMatch(lotto, bonusNumber)) return MATCH_CODE.FIVE_WITH_BONUS;
    return MATCH_CODE.FIVE;
  }

  #setMatchResults(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      let count = this.#countLottoMatches(lotto, winningNumbers);
      if (count === MATCH_CODE.FIVE) count = this.#checkBonusMatch(lotto, bonusNumber);
      if (this.#matchResults.has(count)) this.#matchResults.set(count, this.#matchResults.get(count) + 1);
    });
  }
}

export default LottoStatistics;
