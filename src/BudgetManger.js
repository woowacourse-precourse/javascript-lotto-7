class PurchaseManager {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#lottoPrice = lottoPrice;
  }

  calculateMaxLottos(budget) {
    return budget / this.#lottoPrice;
  }
}

export default PurchaseManager;
