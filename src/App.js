import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const amount = await this.getAmount();
    const tickets = this.generateLottoTickets(amount / 1000);
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
}

export default App;
