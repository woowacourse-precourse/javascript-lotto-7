import Lotto from '../Lotto.js';
import { Console } from '@woowacourse/mission-utils';

export default class LottoGame {
  constructor() {
    this.lottos = [];
    this.LOTTO_PRICE = 1000;
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
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

  checkResults() {
    this.lottos.forEach((lotto) => {
      const matchCount = lotto
        .getNumbers()
        .filter((num) => this.winningNumbers.includes(num)).length;
      const isBonusMatched = lotto.getNumbers().includes(this.bonusNumber);

      const rank = this.#getRank(matchCount, isBonusMatched);
      if (rank) this.results[rank] += 1;
    });
  }

  #getRank(matchCount, isBonusMatched) {
    if (matchCount === 6) return 1;
    if (matchCount === 5 && isBonusMatched) return 2;
    if (matchCount === 5) return 3;
    if (matchCount === 4) return 4;
    if (matchCount === 3) return 5;
    return null;
  }

  printResults() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results[1]}개`);
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

  getResults() {
    return this.results;
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
