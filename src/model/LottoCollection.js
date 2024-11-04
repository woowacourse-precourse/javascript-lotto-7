class LottoCollection {
  #lottoCollection;
  constructor() {
    this.#lottoCollection = [];
  }

  addLotto(lotto) {
    this.#lottoCollection.push(lotto);
  }

  getLottoCollection() {
    return this.#lottoCollection;
  }
}

export default LottoCollection;
