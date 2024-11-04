import {
  RANKING_CONDITIONS,
  RESULT_INITIAL_STATE,
} from '../constants/lottoResults.js';

class LottoGame {
  constructor(lottoTickets, winningNumbers, bonusNumber, purchaseAmount) {
    this.lottoTickets = lottoTickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.purchaseAmount = purchaseAmount;
    this.result = JSON.parse(JSON.stringify(RESULT_INITIAL_STATE));
    this.totalPrize = 0;
  }

  calculateResult() {
    this.lottoTickets.forEach((ticket) => {
      const matchCount = this.getMatchCount(ticket);
      const hasBonus = this.hasBonusNumber(ticket);
      this.updateResult(matchCount, hasBonus);
    });
  }

  getMatchCount(ticket) {
    return ticket.filter((number) => this.winningNumbers.includes(number))
      .length;
  }

  hasBonusNumber(ticket) {
    return ticket.includes(this.bonusNumber);
  }

  updateResult(matchCount, hasBonus) {
    const ranking = RANKING_CONDITIONS.find(
      (condition) =>
        condition.matchCount === matchCount && condition.hasBonus === hasBonus
    );

    if (ranking) {
      this.result[ranking.rank] += 1;
      this.totalPrize += ranking.prize;
    }
  }

  calculateProfitRate() {
    const profitRate = (this.totalPrize / this.purchaseAmount) * 100;
    return profitRate.toFixed(1);
  }
}
export default LottoGame;
