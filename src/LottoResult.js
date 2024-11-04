import { PRIZE } from './constants.js';

class LottoResult {
  #results;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#initializeResults();
  }

  #initializeResults() {
    this.#results = new Map([
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 0],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 0],
      ['6개 일치 (2,000,000,000원)', 0],
    ]);
  }

  addResult(matchCount, hasBonusMatch) {
    if (matchCount === 6) {
      this.#updateCount('6개 일치 (2,000,000,000원)');
    } else if (matchCount === 5 && hasBonusMatch) {
      this.#updateCount('5개 일치, 보너스 볼 일치 (30,000,000원)');
    } else if (matchCount === 5) {
      this.#updateCount('5개 일치 (1,500,000원)');
    } else if (matchCount === 4) {
      this.#updateCount('4개 일치 (50,000원)');
    } else if (matchCount === 3) {
      this.#updateCount('3개 일치 (5,000원)');
    }
  }

  #updateCount(message) {
    this.#results.set(message, this.#results.get(message) + 1);
  }

  getResults() {
    return Array.from(this.#results.entries());
  }

  calculateProfitRate() {
    const totalPrize = this.#calculateTotalPrize();
    return ((totalPrize / this.#purchaseAmount) * 100).toFixed(1);
  }

  #calculateTotalPrize() {
    const prizes = {
      '3개 일치 (5,000원)': 5000,
      '4개 일치 (50,000원)': 50000,
      '5개 일치 (1,500,000원)': 1500000,
      '5개 일치, 보너스 볼 일치 (30,000,000원)': 30000000,
      '6개 일치 (2,000,000,000원)': 2000000000,
    };

    return Array.from(this.#results.entries()).reduce(
      (total, [message, count]) => {
        return total + prizes[message] * count;
      },
      0
    );
  }
}

export default LottoResult;
