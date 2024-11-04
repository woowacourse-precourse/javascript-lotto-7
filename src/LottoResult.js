import { PRIZE } from './constants.js';

class LottoResult {
  #results;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#results = new Map([
      [PRIZE.FIFTH.MESSAGE, 0],
      [PRIZE.FOURTH.MESSAGE, 0],
      [PRIZE.THIRD.MESSAGE, 0],
      [PRIZE.SECOND.MESSAGE, 0],
      [PRIZE.FIRST.MESSAGE, 0],
    ]);
  }

  addResult(matchCount, hasBonusMatch) {
    if (matchCount === 6) {
      this.#updateCount(PRIZE.FIRST.MESSAGE);
    } else if (matchCount === 5 && hasBonusMatch) {
      this.#updateCount(PRIZE.SECOND.MESSAGE);
    } else if (matchCount === 5) {
      this.#updateCount(PRIZE.THIRD.MESSAGE);
    } else if (matchCount === 4) {
      this.#updateCount(PRIZE.FOURTH.MESSAGE);
    } else if (matchCount === 3) {
      this.#updateCount(PRIZE.FIFTH.MESSAGE);
    }
  }

  #updateCount(message) {
    this.#results.set(message, this.#results.get(message) + 1);
  }

  getResults() {
    return new Map(this.#results);
  }

  calculateTotalPrize() {
    let total = 0;

    if (this.#results.get(PRIZE.FIRST.MESSAGE) > 0) {
      total += this.#results.get(PRIZE.FIRST.MESSAGE) * PRIZE.FIRST.AMOUNT;
    }
    if (this.#results.get(PRIZE.SECOND.MESSAGE) > 0) {
      total += this.#results.get(PRIZE.SECOND.MESSAGE) * PRIZE.SECOND.AMOUNT;
    }
    if (this.#results.get(PRIZE.THIRD.MESSAGE) > 0) {
      total += this.#results.get(PRIZE.THIRD.MESSAGE) * PRIZE.THIRD.AMOUNT;
    }
    if (this.#results.get(PRIZE.FOURTH.MESSAGE) > 0) {
      total += this.#results.get(PRIZE.FOURTH.MESSAGE) * PRIZE.FOURTH.AMOUNT;
    }
    if (this.#results.get(PRIZE.FIFTH.MESSAGE) > 0) {
      total += this.#results.get(PRIZE.FIFTH.MESSAGE) * PRIZE.FIFTH.AMOUNT;
    }

    return total;
  }

  calculateProfitRate() {
    const totalPrize = this.calculateTotalPrize();
    return ((totalPrize / this.#purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoResult;
