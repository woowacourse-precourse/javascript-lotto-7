class Statistics {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.third = 0;
    this.fourth = 0;
    this.fifth = 0;
    this.rate = 0;
  }

  update(matchCount, bonusMatch) {
    if (matchCount === 6) {
      this.first += 1;
    } else if (matchCount === 5 && bonusMatch) {
      this.second += 1;
    } else if (matchCount === 5) {
      this.third += 1;
    } else if (matchCount === 4) {
      this.fourth += 1;
    } else if (matchCount === 3) {
      this.fifth += 1;
    }
  }

  calculateRate(totalSpent) {
    const totalPrize =
      this.first * 2000000000 +
      this.second * 30000000 +
      this.third * 1500000 +
      this.fourth * 50000 +
      this.fifth * 5000;
    this.rate = ((totalPrize / totalSpent) * 100).toFixed(1);
  }
}

export default Statistics;
