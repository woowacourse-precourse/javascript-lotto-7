import { MissionUtils } from '@woowacourse/mission-utils';
import { PROMPTS } from './constants.js';

class App {
  async run() {
    const userMoney = await this.getUserMoney();
  }

  async getUserMoney() {
    const userString = await MissionUtils.Console.readLineAsync(
      PROMPTS.INPUT_USER_MONEY
    );
    return userString;
  }
}

export default App;
