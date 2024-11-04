class WinningResult {
  #results = {
    3: 0,
    4: 0,
    5: 0,
    5.5: 0,
    6: 0,
  };

  #prizeMoney = {
    3: 5000,
    4: 50000,
    5: 1500000,
    5.5: 30000000,
    6: 2000000000,
  };

  addResult(matchCount, hasBonus) {
    const rank = this.#calculateRank(matchCount, hasBonus);
    if (rank) {
      this.#results[rank]++;
    }
  }

  #calculateRank(matchCount, hasBonus) {
    if (matchCount === 6) return 6;
    if (matchCount === 5 && hasBonus) return 5.5;
    if (matchCount === 5) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 3;
    return null;
  }

  calculateTotalPrize() {
    return Object.entries(this.#results).reduce((total, [rank, count]) => {
      return total + this.#prizeMoney[rank] * count;
    }, 0);
  }

  getResults() {
    return { ...this.#results };
  }
}

export default WinningResult;
