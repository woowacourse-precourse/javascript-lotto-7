import utils from '../utils/utils.js';
import VALUES from '../constants/values.js';

class Revenue {
  static #OPTIONS = {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };

  static #REVENUE_LIST = [5000, 50000, 1500000, 30000000, 2000000000];

  #total;

  constructor(winningList) {
    this.#calculateRevenue(winningList);
  }

  #calculateRevenue(winningList) {
    this.#total = Revenue.#REVENUE_LIST.reduce(
      (accumulation, currentElement, index) => {
        const matchedCount = winningList[index][VALUES.index.detailValue];

        return accumulation + currentElement * matchedCount;
      },
      0,
    );
  }

  #calculateRate(payment) {
    return this.#total / payment;
  }

  getRateOfReturn(payment) {
    const rate = this.#calculateRate(payment);

    return utils.convertNumberFormat(rate, Revenue.#OPTIONS);
  }
}

export default Revenue;
