import { LOTTO_CONFIG } from '../constants/lottoConfig.js';

class LottoService {
  #lottos;
  #winningNumbers;
  #bonusNumber;
  /**
   * @type {object<string, number>} - 3개, 4개, 5개, 5개 + 보너스, 6개 일치하는 개수를 저장하는 객체
   */
  #lottoResult;

  /**
   * @param {number[][]} lottos - 구매한 로또 번호
   * @param {number[]} winningNumber - 당첨 번호
   * @param {number} bonusNumber - 보너스 번호
   */
  constructor(lottos, winningNumber, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumber;
    this.#bonusNumber = bonusNumber;
    this.#lottoResult = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }

  /**
   * 당첨 결과와 수익률 계산
   * @param {number} purchasePrice
   * @returns {{lottoResult: Object, rateOfRevenue: string}}
   */
  getResults(purchasePrice) {
    const lottoResult = this.getWinningResult();
    const rateOfRevenue = this.calculateRateOfRevenue(purchasePrice);

    return { lottoResult, rateOfRevenue };
  }

  /**
   * 당첨 결과 계산
   * @returns {object} - 당첨 결과
   */
  getWinningResult() {
    this.#lottos.forEach((lotto) => {
      const totalMatchedCount = this.#countMatchedNumbers(lotto);
      this.#updateLottoResult(totalMatchedCount, lotto);
    });

    return this.#lottoResult;
  }

  #updateLottoResult(totalMatchedCount, lotto) {
    if (totalMatchedCount === 5 && lotto.includes(this.#bonusNumber)) {
      this.#lottoResult[LOTTO_CONFIG.FIVE_AND_BONUS_MATCH] += 1;
      return;
    }

    if (totalMatchedCount >= 3) {
      this.#lottoResult[`${totalMatchedCount}`] += 1;
    }
  }

  /**
   * 수익률 계산 - 소수점 첫째 자리까지
   * @param {number} purchasePrice
   * @returns {number} - 수익률
   */
  calculateRateOfRevenue(purchasePrice) {
    const totalRevenue = Object.entries(this.#lottoResult).reduce(
      (sum, [matchCount, numberOfWinnings]) =>
        sum + numberOfWinnings * LOTTO_CONFIG.PRIZE_MONEY[matchCount],
      0
    );
    return this.#formatRateOfRevenue(totalRevenue, purchasePrice);
  }

  #formatRateOfRevenue(totalRevenue, purchasePrice) {
    return ((totalRevenue / purchasePrice) * 100).toFixed(LOTTO_CONFIG.ROUND_TO_FIRST_DECIMAL);
  }

  #countMatchedNumbers(lotto) {
    let matchedCount = 0;
    this.#winningNumbers.forEach((winningNumber) => {
      if (lotto.includes(winningNumber)) {
        matchedCount += 1;
      }
    });

    return matchedCount;
  }
}

export default LottoService;
