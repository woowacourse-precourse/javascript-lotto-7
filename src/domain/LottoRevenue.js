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
    this.#revenue = (Math.round((totalPrice / lottoPurchasePrice) * PERCENTAGE_FACTOR * 10) / 10).toFixed(REVENUE_DECIMAL_PLACE);
  }
}

export default LottoRevenue;
