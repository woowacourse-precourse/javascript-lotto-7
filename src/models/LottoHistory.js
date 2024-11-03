class LottoHistory {
  #lottoCount;
  #lottos;

  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
    this.#lottos = [];
  }

  addLotto(lotto) {
    this.#lottos.push(lotto);
  }

  getPurchaseHistory() {
    return {
      lottoCount: this.#lottoCount,
      lottos: this.#lottos,
    };
  }
}

export default LottoHistory;
