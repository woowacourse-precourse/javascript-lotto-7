class LottoPocket {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  showLottos() {
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }
}

export default LottoPocket;
