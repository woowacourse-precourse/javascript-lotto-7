import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGame {
  #lottoCount;
  #lotto = [];
  #resultNumbers = [];
  #bonusNumber;
  #matchResults = [0, 0, 0, 0, 0, 0];
  #profitRate;

  constructor() {
  }

  async startGame() {
    await this.#getTotalCost();
    this.#generateLottoNumbers();
    await this.#getResultNumbers();
    await this.#getBonusNumber();
    this.#calculateResults();
    this.#calculateProfitRate();
    this.#printResults();
  }

  async #getTotalCost() {
    while (true) {
      try {
        const totalCost = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        this.#isValidTotalCost(totalCost);
        this.#lottoCount = this.#getLottoCount(totalCost);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #generateLottoNumbers() {
    Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottoCount; i++) {
      const num = Random.pickUniqueNumbersInRange(1, 45, 6);
      num.sort((a, b) => a - b);
      this.#lotto.push(new Lotto(num));
      Console.print(`[${num.join(', ')}]`);
    }
  }

  async #getResultNumbers() {
    while (true) {
      try {
        const resultNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
        this.#isValidResultNumbers(resultNumbers);
        this.#resultNumbers = resultNumbers.split(',').map(Number);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #getBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
        this.#isValidBonusNumber(bonusNumber);
        this.#bonusNumber = Number(bonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #calculateResults() {
    this.#lotto.forEach(lotto => {
      const result = lotto.getResult(this.#resultNumbers, this.#bonusNumber);
      if (result > 0) {
        this.#matchResults[result]++;
      }
    });
  }

  #calculateProfitRate() {
    const lottoPrizeAmounts = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };

    let totalPrize = 0;

    for (let i = 1; i <= 5; i++) {
      totalPrize += this.#matchResults[i] * lottoPrizeAmounts[i];
    }

    const totalCost = this.#lottoCount * 1000;
    this.#profitRate = ((totalPrize / totalCost) * 100).toFixed(1);
  }

  #printResults() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.#matchResults[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#matchResults[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#matchResults[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#matchResults[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#matchResults[1]}개`);

    Console.print(`총 수익률은 ${this.#profitRate}%입니다.`);
  }

  #getLottoCount(totalCost) {
    return totalCost / 1000;
  }

  #isValidTotalCost(totalCost) {
    if (isNaN(totalCost)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    if (totalCost % 1000 !== 0) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  #isValidResultNumbers(resultNumbers) {
    if (resultNumbers.split(',').length !== 6) {
      throw new Error('[ERROR] 잘못된 입력입니다. 숫자 6개를 입력해 주세요.');
    }
    if (resultNumbers.split(',').some(isNaN)) {
      throw new Error('[ERROR] 잘못된 입력입니다. 모든 입력은 숫자여야 합니다.');
    }
    if (new Set(resultNumbers.split(',')).size !== 6) {
      throw new Error('[ERROR] 잘못된 입력입니다. 중복된 숫자가 있습니다.');
    }
  }

  #isValidBonusNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
    if (this.#resultNumbers.includes(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
    if (Number(bonusNumber) < 1 || Number(bonusNumber) > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
}

export default LottoGame;