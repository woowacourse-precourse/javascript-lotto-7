import Lotto from '../Lotto.js';

export default class LottoGame {
  constructor() {
    this.lottos = [];
    this.LOTTO_PRICE = 1000;
  }

  purchaseLottos(amount) {
    this.#validateAmount(amount);
    const lottoCount = Math.floor(amount / this.LOTTO_PRICE);
    this.#generateLottos(lottoCount);
  }

  #validateAmount(amount) {
    if (amount % this.LOTTO_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumbers = this.#generateLottoNumbers();
      this.lottos.push(new Lotto(lottoNumbers));
    }
  }

  #generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const number = Math.floor(Math.random() * 45) + 1;
      numbers.add(number);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  }

  getLottos() {
    return this.lottos;
  }
}
