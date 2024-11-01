import { Console } from '@woowacourse/mission-utils';
import Money from './Money.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const money = new Money(await this.payingMoney()).getMoney();
      const lotteryNumbers = Draw.getLotteryNumbers(money);
      const lottoNumbers = new Lotto(await this.enteringNumbers()).getNumbers();
      const bonusNumber = await this.getBonusNumbers();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async payingMoney() {
    Console.print('구입금액을 입력해 주세요.');
    return Number(await Console.readLineAsync(''));
  }

  async enteringNumbers() {
    Console.print('당첨 번호를 입력해 주세요.');
    const enteredNumbers = await Console.readLineAsync('');
    return enteredNumbers.split(',');
  }

  async getBonusNumbers() {
    Console.print('\n보너스 번호를 입력해주세요.');
    const bonusNumber = await Console.readLineAsync('');
    if(!(1<=bonusNumber && bonusNumber<=45)){
      throw new Error("[ERROR] 1부터 45 범위 내의 번호 1개를 입력해주세요.");
    }
    return bonusNumber;
  }
}

export default App;
