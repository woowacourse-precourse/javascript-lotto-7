// src/controllers/LottoGame.js

import Lotto from '../Lotto.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoGame {
  constructor() {
    this.lottos = [];
    this.LOTTO_PRICE = 1000;
  }

  purchaseLottos(amount) {
    this.#validateAmount(amount);
    const lottoCount = Math.floor(amount / this.LOTTO_PRICE);
    this.#generateLottos(lottoCount);
    this.printLottoResults(); // 로또 생성 후 결과 출력
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

  printLottoResults() {
    Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  getLottos() {
    return this.lottos;
  }
}
