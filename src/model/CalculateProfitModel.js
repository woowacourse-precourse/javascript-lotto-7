class CalculateProfitModel {
  getRate(winningCount, lottoPrice) {
    const profit = this.getProfits(winningCount);
    const rate = (profit / lottoPrice) * 100;
    return rate;
  }
  getProfits(winningCount) {
    const profits =
      winningCount[0] * 5000 +
      winningCount[1] * 50000 +
      winningCount[2] * 1500000 +
      winningCount[3] * 200000000 +
      winningCount[4] * 30000000;
    return profits;
  }
}

export default CalculateProfitModel;
