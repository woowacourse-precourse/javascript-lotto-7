import { PRIZE_AMOUNTS } from '../constants';

class ReturnRateCalculatorService {
  calculateTotalReturnRate(purchaseAmount, totalWinningRank) {
    const prizeAmounts = [
      PRIZE_AMOUNTS.PRIZE_AMOUNT_FIRST,
      PRIZE_AMOUNTS.PRIZE_AMOUNT_SECOND,
      PRIZE_AMOUNTS.PRIZE_AMOUNT_THIRD,
      PRIZE_AMOUNTS.PRIZE_AMOUNT_FOURTH,
      PRIZE_AMOUNTS.PRIZE_AMOUNT_FIFTH,
    ];
    let totalPrize = 0;

    totalWinningRank.map((rankCount, index) => {
      totalPrize += rankCount * prizeAmounts[index];
    });

    const totalReturnRate = (totalPrize / purchaseAmount) * 100;
    return Math.round(totalReturnRate * 10) / 10;
  }
}

export default ReturnRateCalculatorService;
