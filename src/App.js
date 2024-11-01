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
    const userWinningNumber = await this.getUserWinningNumber();
    const winningNumber = userWinningNumber.split(',');
    const bonusNumber = await this.getBonusNumber();
  }

  async getUserMoney() {
    const userMoney = await MissionUtils.Console.readLineAsync(
      PROMPTS.INPUT_USER_MONEY
    );
    return userMoney;
  }

  async getUserWinningNumber() {
    const userWinningNumber = await MissionUtils.Console.readLineAsync(
      PROMPTS.INPUT_USER_WINNING_NUMBER
    );
    return userWinningNumber;
  }

  async getBonusNumber() {
    const userBonusNumber = await MissionUtils.Console.readLineAsync(
      PROMPTS.INPUT_USER_BONUS_NUMBER
    );
    return userBonusNumber;
  }
}

export default App;
