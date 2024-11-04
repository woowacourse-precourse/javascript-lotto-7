import { RESULT } from "./constants/result.js";

class LottoResult {
  #results;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#initializeResults();
    this.#purchaseAmount = purchaseAmount;
  }

  #initializeResults() {
    this.#results = new Map([
      [RESULT.THREE.matches, 0],
      [RESULT.FOUR.matches, 0],
      [RESULT.FIVE.matches, 0],
      [RESULT.FIVE_BONUS.matches, 0],
      [RESULT.SIX.matches, 0],
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
    const profitRate = ((totalPrize / (this.#purchaseAmount*1000)) * 100);
    return this.#formatNumber(profitRate.toFixed(1));
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
    return `총 수익률은 ${this.#calculateProfitRate()}%입니다.`;
  }
}

export default LottoResult;