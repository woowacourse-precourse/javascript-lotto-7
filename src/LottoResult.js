import { RESULT, ZERO, PERCENTAGE, TENTHS_PLACE } from "./constants/result.js";
import { LOTTO_PRICE } from "./constants/lotto.js";
import {RATE_OF_RETURN} from "./constants/output.js";
class LottoResult {
  #results;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#initializeResults();
    this.#purchaseAmount = purchaseAmount;
  }

  #initializeResults() {
    this.#results = new Map([
      [RESULT.THREE.matches, ZERO],
      [RESULT.FOUR.matches, ZERO],
      [RESULT.FIVE.matches, ZERO],
      [RESULT.FIVE_BONUS.matches, ZERO],
      [RESULT.SIX.matches, ZERO],
    ]);
  }

  calculateResults(lottos, winningNumbers, bonusNumber) {
    const processedResults = this.#processLottos(
      lottos,
      winningNumbers,
      bonusNumber
    );
    this.#updateAllResults(processedResults);
  }

  #processLottos(lottos, winningNumbers, bonusNumber) {
    return lottos.map((lotto) =>
      this.#getMatchResult(lotto, winningNumbers, bonusNumber)
    );
  }

  #getMatchResult(lotto, winningNumbers, bonusNumber) {
    const matchCount = this.#countMatch(lotto, winningNumbers);
    return this.#determineResult(matchCount, lotto, bonusNumber);
  }

  #countMatch(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  }

  #determineResult(matchCount, lotto, bonusNumber) {
    if (this.#isFiveMatchWithBonus(matchCount, lotto, bonusNumber)) {
      return RESULT.FIVE_BONUS.matches;
    }
    return matchCount;
  }

  #isFiveMatchWithBonus(matchCount, lotto, bonusNumber) {
    return matchCount === RESULT.FIVE.matches && lotto.includes(bonusNumber);
  }

  #updateAllResults(processedResults) {
    processedResults.forEach((matchCount) => {
      this.#incrementResult(matchCount);
    });
  }

  #incrementResult(matchCount) {
    if (this.#results.has(matchCount)) {
      this.#results.set(matchCount, this.#results.get(matchCount) + 1);
    }
  }

  #calculateTotalPrize() {
    return Array.from(this.#results.entries()).reduce((total, [matches, count]) => {
      const result = Object.values(RESULT).find(r => r.matches === matches);
      return total + (result ? result.prize * count : 0);
    }, 0);
  }

  #formatNumber(number) {
    return number.toLocaleString();
  }

  #calculateProfitRate() {
    const totalPrize = this.#calculateTotalPrize();
    const profitRate = ((totalPrize / (this.#purchaseAmount*LOTTO_PRICE)) * PERCENTAGE);
    return this.#formatNumber(profitRate.toFixed(TENTHS_PLACE));
  }

  generateStatistics() {
    return [
      ...this.#generateMatchStatistics(),
      this.#generateProfitRateMessage(),
    ];
  }

  #generateMatchStatistics() {
    return Object.values(RESULT).map((result) => 
      `${result.message} - ${this.#results.get(result.matches)}개`
    );
  }

  #generateProfitRateMessage() {
    return RATE_OF_RETURN(this.#calculateProfitRate());
  }
}

export default LottoResult;