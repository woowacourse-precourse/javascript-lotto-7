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
}

export default LottoResult;
