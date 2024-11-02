import { Console } from '@woowacourse/mission-utils'
import MoneyValidator from "./MoneyValidator.js";

class App {
  async run() {
    try {
      const money = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      const moneyValidate = new MoneyValidator(money);
    } catch(error) {
      throw new Error(error);
    }
  }
}

export default App;
