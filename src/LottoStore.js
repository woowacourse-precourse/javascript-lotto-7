class LottoStore {
  #lottoCount;

  LOTTO_PRICE = 1000;

  constructor(money) {
    this.#lottoCount = this.buyLotto(money);
  }

  buyLotto(money) {
    return Math.floor(money / this.LOTTO_PRICE);
  }
}

export default LottoStore;
