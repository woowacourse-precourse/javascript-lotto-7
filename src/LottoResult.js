class LottoResult {
  constructor() {
    this.ranks = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.rankPrizes = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
  }

  calculateRank(userLotto, lottoNumbers, lottoBonusNumber) {
    userLotto.forEach((ticket) => {
      const matchingNumbers = ticket.filter((num) =>
        lottoNumbers.includes(num)
      ).length;
      const matchingBonus = ticket.includes(lottoBonusNumber);

      const rank = this.getRank(matchingNumbers, matchingBonus);
      if (rank) this.ranks[rank] += 1;
    });
  }

  calculateWinningAmount() {
    let totalWinningAmount = 0;
    for (const rank in this.ranks) {
      totalWinningAmount += this.ranks[rank] * this.rankPrizes[rank];
    }
    return totalWinningAmount;
  }

  calculateProfitRate(totalWinningAmount, purchaseAmount) {
    const profitRate = (totalWinningAmount / purchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  }

  getRank(matchingNumbers, matchingBonus) {
    if (matchingNumbers === 6) return 1;
    if (matchingNumbers === 5 && matchingBonus) return 2;
    if (matchingNumbers === 5) return 3;
    if (matchingNumbers === 4) return 4;
    if (matchingNumbers === 3) return 5;
    return null;
  }
}

export default LottoResult;
