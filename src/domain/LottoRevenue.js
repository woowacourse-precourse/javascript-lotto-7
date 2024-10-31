import { MATCH_PRICE, LOTTO_PRICE_PER_TICKET, PERCENTAGE_FACTOR } from '../constants/constants.js';

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
    Object.entries(matchResults).forEach(([matchCode, winningCount]) => {
      totalPrice += MATCH_PRICE[matchCode] * winningCount;
    });
    this.#revenue = Math.round((totalPrice / lottoPurchasePrice) * PERCENTAGE_FACTOR * 10) / 10;
  }
}

export default LottoRevenue;
