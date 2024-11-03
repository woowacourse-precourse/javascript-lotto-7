class LottoGenerator {
  #lottoQuantity;

  constructor(purchaseMoney) {
    this.#calculateLottoQuality(purchaseMoney);
  }

  #calculateLottoQuality(purchaseMoney) {
    this.#lottoQuantity = purchaseMoney / 1000;
  }

  getLottoGeneratorData() {
    return {
      quantity: this.#lottoQuantity,
    };
  }
}
export default LottoGenerator;
