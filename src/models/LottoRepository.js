class LottoRepository {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  addLottos(lotto) {
    this.#lottos.push(lotto);
  }

  getLottoArray() {
    return this.#lottos;
  }

  getLottoAmount(){
    return this.#lottos.length;
  }
}

export default LottoRepository;
