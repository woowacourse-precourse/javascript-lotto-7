class BudgetManager {
  #budget;
  #lottoPrice;

  constructor(budget, lottoPrice) {
    this.#validate(budget, lottoPrice);
    this.#budget = budget;
    this.#lottoPrice = lottoPrice;
  }

  #validate(budget, lottoPrice) {
    if (budget % lottoPrice !== 0) {
      throw new Error(`[ERROR] 구입 금액은 ${lottoPrice}원 단위로 입력해주세요.`);
    }
  }

  calculateMaxLottos() {
    return this.#budget / this.#lottoPrice;
  }
}
