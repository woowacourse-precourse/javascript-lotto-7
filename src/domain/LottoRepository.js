class LottoRepository {
  lottos

  constructor() {
    this.lottos = [];
  }

  saveLotto(lotto) {
    this.lottos.push(lotto);
  }

  getLottos() {
    return this.lottos;
  }
}

export default LottoRepository;