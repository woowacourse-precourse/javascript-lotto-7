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
}

export default LottoHistory;
