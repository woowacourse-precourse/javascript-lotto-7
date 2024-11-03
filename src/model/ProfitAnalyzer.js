class ProfitAnalyzer {
  #totalPrize;
  #purchaseAmount;
  #rateOfReturn;

  constructor(totalPrize, purchaseAmount) {
    this.#totalPrize = totalPrize;
    this.#purchaseAmount = purchaseAmount;
    this.#rateOfReturn = this.#calculateRateOfReturn(); 
  }

  #calculateRateOfReturn() {
    if (this.#purchaseAmount === 0) return 0;
    return (this.#totalPrize / this.#purchaseAmount) * 100;
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }
}

export default ProfitAnalyzer;
