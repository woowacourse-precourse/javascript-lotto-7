//@ts-check

import { LOTTO_CONFIG } from '../constants/lotto.js';
import Lotto from '../Lotto.js';
import { generateRandomLottoNumbers } from '../util/randomGenerator.js';

class LottoService {
  /**@param {number} count */
  createLottos(count) {
    return Array.from({ length: count }, () => {
      const numbers = generateRandomLottoNumbers();
      return new Lotto(numbers);
    });
  }

  /**@param {string} purchaseAmount  */
  calculateLottoCount(purchaseAmount) {
    return Number(purchaseAmount) / LOTTO_CONFIG.PRICE_PER;
  }

  /**
   * @param {Lotto[]} lottos
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  calculateResults(lottos, winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, BONUS: 0, 6: 0 };

    lottos.forEach((lotto) => {
      const matchCount = lotto.match(winningNumbers);
      this.#updateResults(results, matchCount, lotto, bonusNumber);
    });

    return results;
  }

  /**
   * @param {{ 3: number, 4: number, 5: number, BONUS: number, 6: number }} results
   * @param {number} matchCount
   * @param {Lotto} lotto
   * @param {number} bonusNumber
   */
  #updateResults(results, matchCount, lotto, bonusNumber) {
    if (matchCount === 6) {
      results[6]++;
    } else if (matchCount === 5 && lotto.includes(bonusNumber)) {
      results.BONUS++;
    } else if (matchCount >= 3) {
      results[matchCount]++;
    }
  }

  /**
   * @param {number} purchaseAmount
   * @param {{ 3: number, 4: number, 5: number, BONUS: number, 6: number }} results
   */
  calculateEarningRate(purchaseAmount, results) {
    const totalPrize = this.calculateTotalPrize(results);

    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }

  /**@param {{ 3: number, 4: number, 5: number, BONUS: number, 6: number }} results */
  calculateTotalPrize(results) {
    return Object.entries(results).reduce((sum, [rank, count]) => {
      return sum + LOTTO_CONFIG.PRIZE[rank] * count;
    }, 0);
  }
}

export default LottoService;
