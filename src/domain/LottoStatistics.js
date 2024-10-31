import { MATCH_CODE } from '../constants/constants.js';

class LottoStatistics {
  #lottos = [];
  #winningNumbers;
  #bonusNumber;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getMatchResults() {
    const matchResults = {
      // { matchCode: winningCount }
      [MATCH_CODE.THREE]: 1,
      [MATCH_CODE.FOUR]: 0,
      [MATCH_CODE.FIVE]: 0,
      [MATCH_CODE.FIVE_WITH_BONUS]: 0,
      [MATCH_CODE.SIX]: 0,
    };

    return matchResults;
  }
}

export default LottoStatistics;
