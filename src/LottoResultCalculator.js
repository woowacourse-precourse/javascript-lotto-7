import { LOTTO_PRIZES } from './constants/LottoSettings.js';

class LottoResultCalculator {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static setLottoResultMap() {
    return new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      ['5B', 0],
      [6, 0],
    ]);
  }

  getWinningStatistics(lottoNumbers) {
    const lottoResult = LottoResultCalculator.setLottoResultMap();

    lottoNumbers.forEach(lottoEntry => {
      const matchCount = this.#countMatchingNumbers(lottoEntry);

      if (matchCount === 5 && lottoEntry.includes(this.#bonusNumber)) {
        this.#increaseResult(lottoResult, '5B');
      } else if (lottoResult.has(matchCount)) {
        this.#increaseResult(lottoResult, matchCount);
      }
    });

    return lottoResult;
  }

  getTotalPrize(lottoResult) {
    return Array.from(lottoResult).reduce((totalPrize, [key, count]) => {
      const rankPrize = LOTTO_PRIZES.get(key) || 0;
      return totalPrize + rankPrize * count;
    }, 0);
  }

  getProfitRate(totalPrize, purchaseMoney) {
    return ((totalPrize / purchaseMoney) * 100).toFixed(1);
  }

  getLottoResult(lottoNumbers, purchaseMoney) {
    const lottoResult = this.getWinningStatistics(lottoNumbers);
    const totalPrize = this.getTotalPrize(lottoResult);
    const profitRate = this.getProfitRate(totalPrize, purchaseMoney);

    return { lottoResult, profitRate };
  }

  #countMatchingNumbers(lottoEntry) {
    return this.#winningNumbers.filter(number => lottoEntry.includes(number))
      .length;
  }

  #increaseResult(lottoResult, key) {
    lottoResult.set(key, lottoResult.get(key) + 1);
  }
}

export default LottoResultCalculator;
