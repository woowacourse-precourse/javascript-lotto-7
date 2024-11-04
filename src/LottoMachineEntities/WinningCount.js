import { LOTTO_WIN_RANK } from "../constants/rule.js";

class WinningCount {
  #winningCount;

  constructor() {
    this.#winningCount = Object.keys(LOTTO_WIN_RANK).reduce((acc, rank) => {
      acc[rank] = 0;
      return acc;
    }, {});
  }

  static getRankType(matchCount, isBonusMatch) {
    const [rankType] = Object.entries(LOTTO_WIN_RANK)
      .filter(
        ([, details]) =>
          details.matchCount === matchCount && details.requiresBonus === isBonusMatch,
      )
      .map(([rank]) => rank);

    return rankType;
  }

  increaseRankCount(rank) {
    this.#winningCount[rank] += 1;
  }

  getWinningRankCountString() {
    return `${LOTTO_WIN_RANK.threeMatch.string} (${LOTTO_WIN_RANK.threeMatch.prize.toLocaleString()}원) - ${this.#winningCount.threeMatch}개
${LOTTO_WIN_RANK.fourMatch.string} (${LOTTO_WIN_RANK.fourMatch.prize.toLocaleString()}원) - ${this.#winningCount.fourMatch}개
${LOTTO_WIN_RANK.fiveMatch.string} (${LOTTO_WIN_RANK.fiveMatch.prize.toLocaleString()}원) - ${this.#winningCount.fiveMatch}개
${LOTTO_WIN_RANK.fiveMatchAndBonus.string} (${LOTTO_WIN_RANK.fiveMatchAndBonus.prize.toLocaleString()}원) - ${this.#winningCount.fiveMatchAndBonus}개
${LOTTO_WIN_RANK.allMatch.string} (${LOTTO_WIN_RANK.allMatch.prize.toLocaleString()}원) - ${this.#winningCount.allMatch}개`;
  }

  calculateProfit() {
    return (
      this.#winningCount.threeMatch * LOTTO_WIN_RANK.threeMatch.prize +
      this.#winningCount.fourMatch * LOTTO_WIN_RANK.fourMatch.prize +
      this.#winningCount.fiveMatch * LOTTO_WIN_RANK.fiveMatch.prize +
      this.#winningCount.fiveMatchAndBonus * LOTTO_WIN_RANK.fiveMatchAndBonus.prize +
      this.#winningCount.allMatch * LOTTO_WIN_RANK.allMatch.prize
    );
  }
}

export default WinningCount;
