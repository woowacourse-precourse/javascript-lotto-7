import { Console, Random } from '@woowacourse/mission-utils';
import { PRIZE_MONEY } from './constants.js';
import Lotto from './Lotto.js';
import Validator from './validator.js';

class App {
  constructor() {
    this.numbers = [];
    this.bonusNumber = null;
    this.lottoNumbers = null;
    this.validator = new Validator();
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.validator.validatePurchaseAmount(purchaseAmount)) {
      return;
    }

    return parseInt(purchaseAmount);
  }

  createLottoNumbers(purchaseAmount) {
    const amount = purchaseAmount / 1000;

    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.numbers = [...this.numbers, numbers];
    }

    Console.print(
      `\n${amount}개를 구매했습니다.\n${this.numbers.map((number) => `[${number.join(', ')}]`).join('\n')}\n`
    );
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    if (!this.validator.validateLottoNumber(numbers)) {
      return;
    }

    const lottoNumbers = numbers.split(',').map((number) => parseInt(number));

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

    matchNumbers.forEach((item, index) => {
      const isBonusMatch = this.numbers[index].includes(this.bonusNumber) && item.length === 5;
      const log = logs.find((log) => log.matchCount === item.length && log.bonusNumber === isBonusMatch);

      if (log) {
        log.count += 1;
      }
    });

    return logs;
  }

  printLog(logs) {
    const result = logs.map((log) => {
      let amount = ` (${PRIZE_MONEY[log.matchCount]}원)`;
      if (log.matchCount === 5 && log.bonusNumber) {
        amount = `, 보너스 볼 일치 (30,000,000원)`;
      }
      return `${log.matchCount}개 일치${amount} - ${log.count}개`;
    });

    Console.print('\n당첨 통계\n' + '---\n' + result.join('\n'));
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

    if (!this.validator.validateBonusNumber(this.lottoNumbers, bonusNumber)) {
      return;
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
