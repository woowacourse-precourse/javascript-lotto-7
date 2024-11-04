class LottoRepository {
  #lottos

  constructor() {
    this.#lottos = [];
  }

  saveLotto(lotto) {
    this.#lottos.push(lotto);
  }
}

export default LottoRepository;