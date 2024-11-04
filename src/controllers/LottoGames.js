import Lotto from '../Lotto.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoGame {
  constructor() {
    this.lottos = [];
    this.LOTTO_PRICE = 1000;
    this.winningNumbers = [];
    this.bonusNumber = null;
  }

  purchaseLottos(amount) {
    this.#validateAmount(amount);
    const lottoCount = Math.floor(amount / this.LOTTO_PRICE);
    this.#generateLottos(lottoCount);
    this.printLottoResults();
  }

  setWinningNumbers(winningNumbers, bonusNumber) {
    this.#validateWinningNumbers(winningNumbers, bonusNumber);
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
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

  #validateWinningNumbers(winningNumbers, bonusNumber) {
    if (winningNumbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }

    const uniqueNumbers = new Set(winningNumbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }

    if (winningNumbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
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

  getWinningNumbers() {
    return {
      winningNumbers: this.winningNumbers,
      bonusNumber: this.bonusNumber,
    };
  }
}
