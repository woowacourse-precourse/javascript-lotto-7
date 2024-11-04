import { AMOUNT, PRIZE } from '../constants/constants.js';

class ResultCalculator {
  #winningNumbers;

  #lottos;

  #bonusNumber;

  #prizeCounts = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  };

  #prizeMoney = {
    first: PRIZE.first,
    second: PRIZE.second,
    third: PRIZE.third,
    fourth: PRIZE.fourth,
    fifth: PRIZE.fifth,
  };

  /**
   * @constructor
   * @param {number[][]} lottos - 구매한 로또 번호 배열.
   */
  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  calculateResults() {
    this.#lottos.forEach((lotto) => {
      const matchedCount = this.getMatchingCount(lotto);

      if (matchedCount) this.#prizeCounts[matchedCount] += 1;
    });
  }

  getMatchingCount(lottoNumbers) {
    const matchingCount = lottoNumbers.filter((number) =>
      this.#winningNumbers.includes(number),
    ).length;
    const isBonusMatched = lottoNumbers.includes(this.#bonusNumber);

    if (matchingCount === 6) return 'first';
    if (matchingCount === 5 && isBonusMatched) return 'second';
    if (matchingCount === 5) return 'third';
    if (matchingCount === 4) return 'fourth';
    if (matchingCount === 3) return 'fifth';

    return null;
  }

  getPrizeCounts() {
    return this.#prizeCounts;
  }

  calculateTotalPrize() {
    return Object.entries(this.#prizeCounts).reduce(
      (totalPrize, [key, count]) => totalPrize + this.#prizeMoney[key] * count,
      0,
    );
  }

  calculateROI() {
    const purchaseAmount = this.#lottos.length * AMOUNT.unit;
    const totalPrize = this.calculateTotalPrize();
    const ROI = (totalPrize / purchaseAmount) * 100;

    return ROI.toFixed(1);
  }
}

export default ResultCalculator;
