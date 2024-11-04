import { prizes, prizeCriteria } from '../Constant/winningStandard.js';

class LottoIncome {
  constructor(lottoPrice, statistics) {
    this.lottoPrice = lottoPrice;
    this.statistics = statistics;
  }

  calculateTotalPrize() {
    let totalPrize = 0;

    for (const prize of prizeCriteria) {
      const matchCount = this.statistics[`${prize.prize}Prize`] || 0;
      totalPrize += matchCount * prize.prizeMoney;
    }

    return totalPrize;
  }

  calculateReturnRate() {
    const totalPrize = this.calculateTotalPrize();
    const totalInvestment = this.lottoPrice;

    if (totalInvestment === 0) return 0;

    const returnRate = (totalPrize / totalInvestment) * 100;
    return returnRate.toFixed(2);
  }
}

export default LottoIncome;
