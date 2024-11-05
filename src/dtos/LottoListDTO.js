export default class LottoListDTO {
  constructor(lottoCount, lottos) {
    this.lottoCount = lottoCount;
    this.lottos = lottos;
  }

  static ofLottoCountAndLottos(lottoCount, lottos) {
    return new LottoListDTO(lottoCount, lottos);
  }

  getLottoCount() {
    return this.lottoCount;
  }

  getLottos() {
    return this.lottos;
  }
}