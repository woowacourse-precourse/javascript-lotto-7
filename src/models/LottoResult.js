import WINNING_PRICE from '../constants/winningPrice.js';

class LottoResult {
  constructor(winningNumbers, bonusNumber, lottoTickets) {
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.lottoTickets = lottoTickets;
    this.result = this.calculateResults();
  }

  calculateResults() {
    const results = [
      { matchCount: 3, count: 0 },
      { matchCount: 4, count: 0 },
      { matchCount: 5, count: 0 },
      { matchCount: '5+', count: 0 },
      { matchCount: 6, count: 0 },
    ];

    this.lottoTickets.forEach((ticket) => {
      const matchCount = ticket.filter((number) =>
        this.winningNumbers.includes(number),
      ).length;
      const hasBonus = ticket.includes(this.bonusNumber);

      if (matchCount === 6) results[4].count += 1;
      else if (matchCount === 5) {
        if (hasBonus) results[3].count += 1;
        else results[2].count += 1;
      } else if (matchCount === 4) results[1].count += 1;
      else if (matchCount === 3) results[0].count += 1;
    });

    return results;
  }

  calculateRateOfReturn(purchaseAmount) {
    const totalWinnings =
      this.result[0].count * WINNING_PRICE.MATCH_3 +
      this.result[1].count * WINNING_PRICE.MATCH_4 +
      this.result[2].count * WINNING_PRICE.MATCH_5 +
      this.result[3].count * WINNING_PRICE.MATCH_5_BONUS +
      this.result[4].count * WINNING_PRICE.MATCH_6;
    return ((totalWinnings / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoResult;
