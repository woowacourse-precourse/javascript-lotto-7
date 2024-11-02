import LottoGenerator from './LottoGenerator.js';

export default class LottoPurchaser {
  #purchasePrice;
  #lottoCount;
  #lottos;
  #lottoResult;

  getLottoCount() {
    return this.#lottoCount;
  }

  getLottos() {
    return this.#lottos;
  }

  purchase(purchasePrice) {
    // TODO : 생성자 코드 수정 고려해보기
    const lottoGenerator = new LottoGenerator();

    [this.#lottoCount, this.#lottos] = lottoGenerator.generate(purchasePrice);
  }
}
