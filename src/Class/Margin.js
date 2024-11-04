import { getMarginRate, getMarginSum } from "../feature/calculate/getMargin"

class Margin {
  #sum
  #rate
  #purchase

  constructor(lottoResult, purchase) {
    this.#purchase = purchase
    this.#sum = this.#getSum(lottoResult);
    this.#rate = this.#getRate(this.#sum, this.#purchase);
  }

  #getSum(lottoResult) {
    const MARGIN_SUM = getMarginSum(lottoResult);
    return MARGIN_SUM;
  };

  #getRate(marginSum, purchase) {
    const MARGIN_RATE = getMarginRate(marginSum, purchase);
    return MARGIN_RATE;
  }

  get rate() {
    return this.#rate;
  }
};

export default Margin;