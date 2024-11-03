class ReturnRateCalculatorService {
  calculateTotalReturnRate(purchaseAmount, totalWinningRank) {
    const prizeAmounts = [2000000000, 30000000, 1500000, 50000, 5000];
    let totalPrize = 0;

    totalWinningRank.map((rankCount, index) => {
      totalPrize += rankCount * prizeAmounts[index];
    });

    const totalReturnRate = (totalPrize / purchaseAmount) * 100;
    return Math.round(totalReturnRate * 10) / 10;
  }
}

export default ReturnRateCalculatorService;
