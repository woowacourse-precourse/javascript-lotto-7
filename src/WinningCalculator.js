class WinningCalculator {
  constructor() {
    this.stats = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  }

  countMatchedNumbers(winningNumbers, bonusNumber, ticketNumbers) {
    const matchedCount = ticketNumbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    const isBonusMatched = ticketNumbers.includes(bonusNumber);

    return { matchedCount, isBonusMatched };
  }

  calculatePrize(matchedCount, isBonusMatched) {
    switch (matchedCount) {
      case 6:
        return 1;
      case 5: 
        if (isBonusMatched) {
          return 2;
        } else {
          return 3;
        }
      case 4: 
        return 4; 
      case 3:
        return 5;
      default:
        return 0;
    }
  }

  recordResult(winningNumbers, bonusNumber, tickets) {
    tickets.forEach((ticket) => {
      const ticketNumbers = ticket.getLottoNumbers;
      const { matchedCount, isBonusMatched } = this.countMatchedNumbers(
        winningNumbers,
        bonusNumber,
        ticketNumbers
      );

      const rank = this.calculatePrize(matchedCount, isBonusMatched);
      if (rank) {
        this.stats[rank]++;
      }
    });
  }

  getStatistics() {
    return this.stats;
  }
}

export default WinningCalculator;