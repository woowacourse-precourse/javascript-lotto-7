import { WINNING_PRIZES } from "./constants.js";

class LottoStatistics {
  constructor() {
    this.statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  updateStatistics(matchCount, hasBonus) {
    if (matchCount === 6) this.statistics.first++;
    if (matchCount === 5 && hasBonus) this.statistics.second++;
    if (matchCount === 5 && !hasBonus) this.statistics.third++;
    if (matchCount === 4) this.statistics.fourth++;
    if (matchCount === 3) this.statistics.fifth++;
  }

  calculateStatistics(lottos, winningLotto, bonusNumber) {
    lottos.forEach((lotto) => {
      const { matchCount, hasBonus } = this.getMatchResult(
        lotto,
        winningLotto,
        bonusNumber
      );
      this.updateStatistics(matchCount, hasBonus);
    });
  }

  getMatchResult(lotto, winningLotto, bonusNumber) {
    const matchCount = this.countMatches(lotto, winningLotto);
    const hasBonus = lotto.getNumbers().includes(bonusNumber);
    return { matchCount, hasBonus };
  }

  countMatches(lotto, winningLotto) {
    return lotto
      .getNumbers()
      .filter((num) => winningLotto.getNumbers().includes(num)).length;
  }

  getStatistics() {
    return this.statistics;
  }

  calculateTotalPrize() {
    return (
      this.statistics.first * WINNING_PRIZES.first +
      this.statistics.second * WINNING_PRIZES.second +
      this.statistics.third * WINNING_PRIZES.third +
      this.statistics.fourth * WINNING_PRIZES.fourth +
      this.statistics.fifth * WINNING_PRIZES.fifth
    );
  }

  calculateProfitRate(amount) {
    const totalPrize = this.calculateTotalPrize();
    const profitRate = (totalPrize / amount) * 100;
    return Math.round(profitRate * 100) / 100;
  }
}

export default LottoStatistics;
