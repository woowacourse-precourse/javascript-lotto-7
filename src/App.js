import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS, INFO } from './constants.js';
import Lotto from './Lotto.js';

class App {
  async run() {
    const userMoney = await this.getUserMoney();
    const countLotto = userMoney / 1000;
    const userLotto = [];
    MissionUtils.Console.print(`\n${countLotto}${INFO.USER_BUY}`);
    for (let i = 0; i < countLotto; i++) {
      userLotto.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
      );
      MissionUtils.Console.print(userLotto[i].showNumber());
    }
  }

  async getUserMoney() {
    const userMoney = await MissionUtils.Console.readLineAsync(
      PROMPTS.INPUT_USER_MONEY
    );
    return userMoney;
  }
}

export default App;
