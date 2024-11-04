import { MATCH_PRICE, LOTTO_PRICE_PER_TICKET, PERCENTAGE_FACTOR, REVENUE_DECIMAL_PLACE } from '../constants/constants.js';
import parser from '../utils/parser.js';

class LottoRevenue {
  #revenue;

  constructor(lottoCount, matchResults) {
    this.#calculateRevenue(lottoCount, matchResults);
  }

  getRevenue() {
    return this.#revenue;
  }

  #calculateTotalPrice(matchResults) {
    let totalPrice = 0;
    matchResults.forEach((winningCount, matchCode) => {
      totalPrice += MATCH_PRICE[matchCode] * winningCount;
    });
    return totalPrice;
  }

  #calculateRevenue(lottoCount, matchResults) {
    const lottoPurchasePrice = lottoCount * LOTTO_PRICE_PER_TICKET;
    const totalPrice = this.#calculateTotalPrice(matchResults);

    const revenueRatio = totalPrice / lottoPurchasePrice;
    const revenuePercentage = revenueRatio * PERCENTAGE_FACTOR;
    const roundedRevenuePercentage = Math.round(revenuePercentage * 10) / 10;

    const localeStringOptions = { minimumFractionDigits: REVENUE_DECIMAL_PLACE, maximumFractionDigits: REVENUE_DECIMAL_PLACE };
    this.#revenue = parser.parseNumberWithCommas(roundedRevenuePercentage, localeStringOptions);
  }
}

export default LottoRevenue;
