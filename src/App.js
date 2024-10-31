import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async run() {
    const buy_cost = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const STANDARD_COST = 1000;
    const buy_count = buy_cost / STANDARD_COST;

    if (isNaN(buy_cost)) {
      Console.print('숫자로 입력');
    }
    if (buy_cost < STANDARD_COST) {
      Console.print('1000이상이여야 함');
    }
    if (!Number.isInteger(buy_count)) {
      Console.print('1000원 단위로 떨어져야 함');
    }

    Console.print(`\n${buy_count}개를 구매했습니다.`);
    const my_loto_number = [];
    for (let i = 0; i < buy_count; i++) {
      const loto_number = this.generateNumber();
      Console.print(loto_number);
      my_loto_number.push(loto_number)
    }
    
  }

  generateNumber() {
    const loto_number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    loto_number.sort((a, b) => a - b);
    return loto_number;
  }
}

export default App;
