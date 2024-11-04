import { LOTTO_WIN_RANK } from "./constants/rule.js";

class WinningRankCount {
  #winningRankCount;

  constructor() {
    this.#winningRankCount = Object.keys(LOTTO_WIN_RANK).reduce((acc, rank) => {
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
    this.#winningRankCount[rank] += 1;
  }

  getWinningRankCountString() {
    return `${LOTTO_WIN_RANK.threeMatch.string} (${LOTTO_WIN_RANK.threeMatch.prize.toLocaleString()}원) - ${this.#winningRankCount.threeMatch}개
${LOTTO_WIN_RANK.fourMatch.string} (${LOTTO_WIN_RANK.fourMatch.prize.toLocaleString()}원) - ${this.#winningRankCount.fourMatch}개
${LOTTO_WIN_RANK.fiveMatch.string} (${LOTTO_WIN_RANK.fiveMatch.prize.toLocaleString()}원) - ${this.#winningRankCount.fiveMatch}개
${LOTTO_WIN_RANK.fiveMatchAndBonus.string} (${LOTTO_WIN_RANK.fiveMatchAndBonus.prize.toLocaleString()}원) - ${this.#winningRankCount.fiveMatchAndBonus}개
${LOTTO_WIN_RANK.allMatch.string} (${LOTTO_WIN_RANK.allMatch.prize.toLocaleString()}원) - ${this.#winningRankCount.allMatch}개`;
  }

  calculateProfit() {
    return (
      this.#winningRankCount.threeMatch * LOTTO_WIN_RANK.threeMatch.prize +
      this.#winningRankCount.fourMatch * LOTTO_WIN_RANK.fourMatch.prize +
      this.#winningRankCount.fiveMatch * LOTTO_WIN_RANK.fiveMatch.prize +
      this.#winningRankCount.fiveMatchAndBonus * LOTTO_WIN_RANK.fiveMatchAndBonus.prize +
      this.#winningRankCount.allMatch * LOTTO_WIN_RANK.allMatch.prize
    );
  }
}

export default WinningRankCount;
