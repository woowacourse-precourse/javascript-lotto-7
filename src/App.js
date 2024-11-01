import { Console } from '@woowacourse/mission-utils';
import Money from './Money.js';
import Draw from './Draw.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    try {
      const money = new Money(await this.payingMoney()).getMoney();
      const lotteryNumbers = Draw.getLotteryNumbers(money);
      const enteredNumbers = await this.getNumbers();
      const lottoNumbers = new Lotto(enteredNumbers);
      
    } catch (error) {
      Console.print(error.message);
    }
  }

  
  async payingMoney(){
    Console.print("구입금액을 입력해 주세요.");
    const paidMoney = Number(await Console.readLineAsync(''));
    return paidMoney;
}

  async getNumbers(){
    Console.print("당첨 번호를 입력해 주세요.");
    const enteredNumbers = await Console.readLineAsync('');
    enteredNumbers.split(',');
    return enteredNumbers;
  }

}

export default App;
