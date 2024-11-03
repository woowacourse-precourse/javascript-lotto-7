import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.numbers = [];
    this.bonusNumber = null;
    this.lottoNumbers = null;
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.validatePurchaseAmount(purchaseAmount)) {
      return;
    }

    return parseInt(purchaseAmount);
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount || purchaseAmount.trim() === '') {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해 주세요.');
    }

    if (!/^\d+$/.test(purchaseAmount)) {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해 주세요.');
    }

    if (parseInt(purchaseAmount) % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.');
    }

    return true;
  }

  createLottoNumbers(purchaseAmount) {
    const amount = purchaseAmount / 1000;

    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.numbers = [...this.numbers, numbers];
    }

    Console.print(`${amount}개를 구매했습니다.\n${this.numbers.map((number) => `[${number.join(', ')}]`).join('\n')}`);
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const lottoNumbers = numbers.split(',').map((number) => parseInt(number));

    if (lottoNumbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }

    this.lottoNumbers = lottoNumbers;

    this.bonusNumber = await this.getBonusNumber();

    return this.numbers.map((number) => {
      const lotto = new Lotto(number);
      return lotto.checkWinningNumbers(lottoNumbers);
    });
  }

  getMatchResult(matchNumbers) {
    const logs = [
      { matchCount: 3, count: 0, bonusNumber: false, prizeMoney: 5000 },
      { matchCount: 4, count: 0, bonusNumber: false, prizeMoney: 50000 },
      { matchCount: 5, count: 0, bonusNumber: false, prizeMoney: 1500000 },
      { matchCount: 5, count: 0, bonusNumber: true, prizeMoney: 30000000 },
      { matchCount: 6, count: 0, bonusNumber: false, prizeMoney: 2000000000 },
    ];

    matchNumbers
      .filter((numbers) => numbers.length >= 3)
      .forEach((item) => {
        const findIndex = logs.findIndex((log) => log.matchCount === item.length);

        if (logs[findIndex].matchCount === 5 && logs[findIndex].bonusNumber) {
          logs[findIndex].count += 1;
        } else {
          logs[findIndex].count += 1;
        }
      });

    return logs;
  }

  printLog(logs) {
    const money = {
      3: '5,000',
      4: '50,000',
      5: '1,500,000',
      6: '2,000,000,000',
    };

    const result = logs.map((log) => {
      let amount = ` (${money[log.matchCount]}원)`;
      if (log.matchCount === 5 && log.bonusNumber) {
        amount = `, 보너스 볼 일치 (30,000,000원)`;
      }
      return `${log.matchCount}개 일치${amount} - ${log.count}개`;
    });

    Console.print('당첨 통계\n' + '---\n' + result.join('\n'));
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    if (
      isNaN(parseInt(bonusNumber)) ||
      bonusNumber.trim() === '' ||
      parseInt(bonusNumber) < 1 ||
      parseInt(bonusNumber) > 45
    ) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.');
    }

    if (this.lottoNumbers.includes(parseInt(bonusNumber))) {
      throw new Error('[ERROR] 중복된 번호 입니다.');
    }

    return parseInt(bonusNumber);
  }

  calculateReturnRate(logs, amount) {
    const sum = logs.reduce((acc, cur) => {
      if (cur.count > 0) {
        acc += cur.prizeMoney;
      }
      return acc;
    }, 0);

    const returnRate = (sum / amount) * 100;

    return Math.round(returnRate * 100) / 100;
  }

  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      this.createLottoNumbers(purchaseAmount);
      const winningNumbers = await this.getWinningNumbers();
      const matchResult = this.getMatchResult(winningNumbers);
      this.printLog(matchResult);

      const returnRate = this.calculateReturnRate(matchResult, purchaseAmount);
      Console.print(`총 수익률은 ${returnRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
