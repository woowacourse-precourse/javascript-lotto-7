import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Validator from './Validator.js';
import { PRIZE_MONEY } from './constants.js';

class LottoManager {
  constructor() {
    this.numbers = [];
    this.validator = new Validator();
    this.bonusNumber = null;
    this.lottoNumbers = null;
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

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

    if (!this.validator.validateBonusNumber(this.lottoNumbers, bonusNumber)) {
      return;
    }

    return parseInt(bonusNumber);
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    if (!this.validator.validateLottoNumber(numbers)) {
      return;
    }

    const lottoNumbers = numbers.split(',').map((number) => parseInt(number));
    this.lottoNumbers = lottoNumbers;
    this.bonusNumber = await this.getBonusNumber();

    return lottoNumbers;
  }

  getMatchResult(winningNumbers) {
    const logs = [
      { matchCount: 3, count: 0, bonusNumber: false, prizeMoney: 5000 },
      { matchCount: 4, count: 0, bonusNumber: false, prizeMoney: 50000 },
      { matchCount: 5, count: 0, bonusNumber: false, prizeMoney: 1500000 },
      { matchCount: 5, count: 0, bonusNumber: true, prizeMoney: 30000000 },
      { matchCount: 6, count: 0, bonusNumber: false, prizeMoney: 2000000000 },
    ];

    this.numbers.forEach((number) => {
      const lotto = new Lotto(number);
      const matchedNumbers = lotto.checkWinningNumbers(winningNumbers);
      const isBonusMatch = number.includes(this.bonusNumber) && matchedNumbers.length === 5;
      const log = logs.find((log) => log.matchCount === matchedNumbers.length && log.bonusNumber === isBonusMatch);

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
}

export default LottoManager;
