class Winner {
  checkRanking(results) {
    let matchCounts = [0, 0, 0, 0, 0];
    results.forEach((result) => {
      if (result.numberMatch === 6) matchCounts[4]++;
      else if (result.numberMatch === 5 && result.bonusMatch === true)
        matchCounts[3]++;
      else if (result.numberMatch === 5) matchCounts[2]++;
      else if (result.numberMatch === 4) matchCounts[1]++;
      else if (result.numberMatch === 3) matchCounts[0]++;
    });
    return matchCounts;
  }

  confirmReturnRate(ranks, cost) {
    const totalPrize = this.calculateTotalPrizeMoney(ranks);
    return ((totalPrize / cost) * 100).toFixed(1);
  }

  calculateTotalPrizeMoney(ranks) {
    const prizeCriteria = [5000, 50000, 1500000, 30000000, 2000000000];
    let totalPrize = 0;
    ranks.forEach((rank, index) => {
      totalPrize += rank * prizeCriteria[index];
    });
    return totalPrize;
  }
}
export default Winner;
