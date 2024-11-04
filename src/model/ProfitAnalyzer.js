class ProfitAnalyzer {
  #totalPrize;
  #purchaseAmount;
  #rateOfReturn;

  constructor(totalPrize, purchaseAmount) {
    this.#totalPrize = totalPrize;
    this.#purchaseAmount = purchaseAmount;
    this.#rateOfReturn = this.#calculateRateOfReturn(); 
  }

    /**
   * 수익률을 반환하는 메서드
   * @returns {number} 수익률 (총 상금 대비 구입 금액의 백분율)
   * @example
   * // 예시 반환값
   * 150.0 // 총 상금이 1500이고 구입 금액이 1000일 경우 수익률 150%
   */
  getRateOfReturn() {
    return this.#rateOfReturn;
  }

  #calculateRateOfReturn() {
    if (this.#purchaseAmount === 0) return 0;
    return (this.#totalPrize / this.#purchaseAmount) * 100;
  }
}

export default ProfitAnalyzer;
