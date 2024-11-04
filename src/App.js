import { Console } from '@woowacourse/mission-utils';
import LottoManager from './LottoManager.js'
import WinningManager from './WinningManager.js';
class App {
  constructor() {
    this.ITEM_PRICE = 1000;

    this.lottoManager = new LottoManager();
    this.winningManager = new WinningManager();
  }

  async run() {
    while (true) {
      Console.print('구입금액을 입력해 주세요.');
      const input = await this.answer();

      try {
        const amount = this.getAmount(input);
        Console.print(`\n${amount}개를 구매했습니다.`);

        this.lottoManager.generateLottos(amount);
        this.lottoManager.printLottos();

        await this.winningManager.checkWinningNumbers(this.lottoManager.getLottoTickets());

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async answer() {
    const input = await Console.readLineAsync('');
    return input;
  }

  getAmount(money) {
    const amount = this.validateAmount(money);
    return this.calculateAmount(amount);
  }

  validateAmount(money) {
    const amount = Number(money);

    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 구입금액이 유효하지 않습니다.");
    }

    return amount;
  }

  calculateAmount(amount) {
    const result = amount / this.ITEM_PRICE;

    if (!Number.isInteger(result)) {
      throw new Error("[ERROR] 구입금액은 1,000원의 배수여야 합니다.");
    }

    return result;
  }
}

export default App;
