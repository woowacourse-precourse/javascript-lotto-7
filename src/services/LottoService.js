import LottoResult from '../models/LottoResult.js';

export default class LottoService {
  #lottoResult;
  #lottos;
  #winningLotto;

  // 로또 구매하기
  purchaseLottos(price) {
    this.#lottoResult = new LottoResult(price);
  }
}
