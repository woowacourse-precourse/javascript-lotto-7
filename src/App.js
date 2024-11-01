import { Console } from '@woowacourse/mission-utils';
import Money from './Money.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const money = new Money(await this.payingMoney()).getMoney();
      const lotteryNumbers = Draw.getLotteryNumbers(money);
      const lottoNumbers = new Lotto(await this.getNumbers());
    } catch (error) {
      Console.print(error.message);
    }
  }

  async payingMoney() {
    Console.print('구입금액을 입력해 주세요.');
    return Number(await Console.readLineAsync(''));
  }

  async getNumbers() {
    Console.print('당첨 번호를 입력해 주세요.');
    const enteredNumbers = await Console.readLineAsync('');
    return enteredNumbers.split(',');
  }
}

export default App;
