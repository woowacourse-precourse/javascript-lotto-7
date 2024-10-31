import { MATCH_PRICE } from '../constants/constants.js';

class LottoRevenue {
  #revenue;

  constructor(lottoCount, matchResults) {
    this.#calculateRevenue(lottoCount, matchResults);
  }

  getRevenue() {
    return this.#revenue;
  }

  #calculateRevenue(lottoCount, matchResults) {
    const lottoPurchasePrice = lottoCount * 1000;
    let totalPrice = 0;
    Object.entries(matchResults).forEach(([matchCode, winningCount]) => {
      totalPrice += MATCH_PRICE[matchCode] * winningCount;
    });
    this.#revenue = Math.round((totalPrice / lottoPurchasePrice) * 1000) / 10;
  }
}

export default LottoRevenue;
