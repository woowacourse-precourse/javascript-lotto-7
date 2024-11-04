import Lotto from '../Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

export default class LottoGame {
  constructor() {
    this.lottos = [];
    this.LOTTO_PRICE = 1000;
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.prizeMoney = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
    this.totalPurchaseAmount = 0;
  }

  purchaseLottos(amount) {
    this.#validateAmount(amount);
    const lottoCount = Math.floor(amount / this.LOTTO_PRICE);
    this.totalPurchaseAmount = amount;
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

  calculateProfitRate() {
    const totalPrize = Object.entries(this.results).reduce((acc, [rank, count]) => {
      return acc + this.prizeMoney[rank] * count;
    }, 0);

    const profitRate = (totalPrize / this.totalPurchaseAmount) * 100;
    return Math.round(profitRate * 10) / 10;
  }

  printResults() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.results[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.results[1]}개`);
    const profitRate = this.calculateProfitRate();
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  #validateAmount(amount) {
    if (amount % this.LOTTO_PRICE !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }
  }

  #generateLottos(count) {
    for (let i = 0; i < count; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(new Lotto(lottoNumbers));
    }
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
