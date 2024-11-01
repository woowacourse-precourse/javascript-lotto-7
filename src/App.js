import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LottoResult from './LottoResult.js';

class App {
  async run() {
    const amount = await this.getAmount();
    const tickets = this.generateLottoTickets(amount / 1000);
    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    const lottoResult = new LottoResult();
    this.calculateStatistics(tickets, winningNumbers, bonusNumber, lottoResult);
    lottoResult.printStatistics();
    const profitRate = lottoResult.calculateProfitRate(amount);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async getAmount() {
    while (true) {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

      try {
        return this.validateAmount(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateAmount(input) {
    if (!/^\d+$/.test(input)) {
      throw new Error('[ERROR] 구입금액은 숫자로만 이루어져야 합니다.');
    }

    const amount = parseInt(input, 10);
    const LOTTO_PRICE = 1000;

    if (amount < LOTTO_PRICE) {
      throw new Error('[ERROR] 구입금액은 1,000원 이상이여야 합니다.');
    }
    if (amount % LOTTO_PRICE !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000원 단위여야 합니다.');
    }

    return amount;
  }

  generateLottoTickets(count) {
    Console.print(`\n${count}개를 구매했습니다.`);
    const tickets = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const lotto = new Lotto(numbers);
      tickets.push(lotto);
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    }
    return tickets;
  }

  async getWinningNumbers() {
    while (true) {
      const input = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );

      try {
        return this.validateWinningNumbers(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateWinningNumbers(input) {
    const numbers = input.split(',');

    if (numbers.length !== 6)
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    if (new Set(numbers).size !== numbers.length)
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');

    numbers.forEach((n) => {
      if (!/^\d+$/.test(n) || parseInt(n, 10) < 1 || parseInt(n, 10) > 45) {
        throw new Error('[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.');
      }
    });

    return numbers;
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      const input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

      try {
        return this.validateBonusNumber(input, winningNumbers);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  validateBonusNumber(input, winningNumbers) {
    if (!/^\d+$/.test(input) || parseInt(input, 10) < 1 || parseInt(input, 10) > 45) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
    }

    if (winningNumbers.includes(input)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }

    return parseInt(input, 10);
  }

  calculateStatistics(tickets, winningNumbers, bonusNumber, lottoResult) {
    const winningNums = winningNumbers.map((num) => parseInt(num, 10));

    tickets.forEach((ticket) => {
      const matches = ticket.getNumbers().filter((num) => winningNums.includes(num)).length;
      const hasBonus = ticket.getNumbers().includes(bonusNumber);
      lottoResult.countMatches(matches, hasBonus);
    });
  }
}

export default App;
