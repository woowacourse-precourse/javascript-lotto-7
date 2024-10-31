import { getFilteredMatchList } from "../feature/match/getMatchCount.js";

class LottoResult {
  #lottoList;
  #winningStats;

  constructor(lottoList, winNumbers, bonusNumber) {
    this.#lottoList = getFilteredMatchList(lottoList, winNumbers, bonusNumber);
    this.#winningStats = this.#getLottoResult(this.#lottoList);
  };

  #createWinningStats() {
    const WINNING_STATS = new Map([
      ['3개 일치', { count : 0, winningAmount: 5000 }],
      ['4개 일치', { count : 0, winningAmount: 50000 }],
      ['5개 일치', { count : 0, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 0, winningAmount: 30000000 }],
      ['6개 일치', { count : 0, winningAmount: 2000000000 }],
    ]);

    return WINNING_STATS;
  }

  #getKey(lotto, isBonus) {
    let winningStatKey = `${lotto}개 일치`;

    if (isBonus) {
      winningStatKey += ', 보너스 볼 일치';
    };

    return winningStatKey;
  };

  #increaseCount(winningStats, key) {
    let currentValue = winningStats.get(key);
    currentValue.count++;
  };

  #getLottoResult(lottoList) {
    const WINNING_STATS = this.#createWinningStats();

    lottoList.forEach((lottoResult) => {
      const MATCH_COUNT = lottoResult[0];
      const IS_BONUS = lottoResult[1];
      const KEY = this.#getKey(MATCH_COUNT, IS_BONUS);
      if (KEY) {
      this.#increaseCount(WINNING_STATS, KEY);
      }
    });

    return WINNING_STATS;
  };

  get getResult() {
    return this.#winningStats;
  };
};

export default LottoResult;