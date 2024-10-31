import { getFilteredMatchList } from "../feature/match/getMatchCount.js";

class LottoResult {
  #lottoList;
  #winningStats;

  constructor(lottoList, winNumbers, bonusNumber) {
    this.#lottoList = winNumberMatcher(lottoList, winNumbers, bonusNumber);
    this.#winningStats = new Map([
      ['3개 일치', { count : 0, winningAmount: 5000 }],
      ['4개 일치', { count : 0, winningAmount: 50000 }],
      ['5개 일치', { count : 0, winningAmount: 1500000 }],
      ['5개 일치, 보너스 볼 일치', { count : 0, winningAmount: 30000000 }],
      ['6개 일치', { count : 0, winningAmount: 2000000000 }],
    ]);
    this.#reflectResult(this.#lottoList);
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

  #increaseCount(key) {
    let currentValue = this.#winningStats.get(key);
    currentValue++;
  };

  #reflectResult(lottoList) {
    lottoList.forEach((lotto, isBonus) => {
      const KEY = this.#getKey(lotto, isBonus);
      this.#increaseCount(KEY);
    });
  };

  get getResult() {
    return this.#winningStats;
  };
};

export default LottoResult;