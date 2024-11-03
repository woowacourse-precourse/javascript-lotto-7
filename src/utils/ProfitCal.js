class ProfitCal {
  #ranks;

  #rankLength;

  constructor(ranks) {
    this.#ranks = ranks;
    this.#rankLength = ranks.length;
  }

  getProfitRate() {
    let totalMoney = 0;
    this.#ranks.forEach((rank) => {
      totalMoney += this.setMoney(rank);
    });
    const myMoney = this.#rankLength * 1000;
    const profitRate = (totalMoney / myMoney) * 100;
    return parseFloat(profitRate.toFixed(2));
  }

  setMoney(rank) {
    switch (rank) {
      case 1:
        return 2000000000;
      case 2:
        return 30000000;
      case 3:
        return 1500000;
      case 4:
        return 50000;
      case 5:
        return 5000;
      default:
        return 0;
    }
  }
}

export default ProfitCal;
