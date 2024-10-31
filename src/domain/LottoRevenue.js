import { MATCH_PRICE, LOTTO_PRICE_PER_TICKET, PERCENTAGE_FACTOR, REVENUE_DECIMAL_PLACE } from '../constants/constants.js';

class LottoRevenue {
  #revenue;

  constructor(lottoCount, matchResults) {
    this.#calculateRevenue(lottoCount, matchResults);
  }

  getRevenue() {
    return this.#revenue;
  }

  #calculateRevenue(lottoCount, matchResults) {
    const lottoPurchasePrice = lottoCount * LOTTO_PRICE_PER_TICKET;

    let totalPrice = 0;
    matchResults.forEach((winningCount, matchCode) => {
      totalPrice += MATCH_PRICE[matchCode] * winningCount;
    });

    const revenueRatio = totalPrice / lottoPurchasePrice;
    const revenuePercentage = revenueRatio * PERCENTAGE_FACTOR;
    const roundedRevenuePercentage = Math.round(revenuePercentage * 10) / 10;

    const localeStringOptions = { minimumFractionDigits: REVENUE_DECIMAL_PLACE, maximumFractionDigits: REVENUE_DECIMAL_PLACE };
    this.#revenue = roundedRevenuePercentage.toLocaleString('ko-KR', localeStringOptions);
  }
}

export default LottoRevenue;
