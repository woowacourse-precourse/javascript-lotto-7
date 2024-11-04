import { LOTTO_RESULT } from "./constants/Constants.js";

class Statistics {
  #results = { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 0 };

  constructor(lottos, winningNumbers, bonusNumber) {
    this.lottos = lottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  analyzeLottoResults() {
    this.lottos.forEach((lotto) => {
      const matchedCount = this.countMatchingNumbers(lotto);
      this.updateWinningCounts(matchedCount, lotto);
    });
  }

  countMatchingNumbers(lotto) {
    return lotto.filter((number) => this.winningNumbers.includes(number))
      .length;
  }

  updateWinningCounts(matchedCount, lotto) {
    if (matchedCount === 5 && lotto.includes(this.bonusNumber)) {
      this.#results["5+1"]++;
    } else if (matchedCount >= 3) {
      this.#results[matchedCount]++;
    }
  }

  calculateEarningsRate(inputAmount) {
    const totalPrize = Object.entries(LOTTO_RESULT).reduce(
      (sum, [key, value]) => sum + value.prize * (this.#results[key] || 0),
      0
    );

    const rate = (totalPrize / inputAmount) * 100;
    return rate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  }

  getResults() {
    return this.#results;
  }
}

export default Statistics;
