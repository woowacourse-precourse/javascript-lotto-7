import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';

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
    this.#purchasePrice = purchasePrice

    [this.#lottoCount, this.#lottos] = lottoGenerator.generate(purchasePrice);
    this.#lottoResult = new LottoResult();
  }

  compareLottosWithWinningLotto(){
    // 당첨 로또 가져오기
    // 당첨 로또랑 비교
    // 당첨 로또 결과값 설정하기
    
  }
}
