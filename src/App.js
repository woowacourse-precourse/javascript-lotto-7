import { MissionUtils, Console } from "@woowacourse/mission-utils";
import LottoMoneyValidator from "./validator/LottoMoneyValidator.js";
class App {
  constructor() {
    this.lottoMoneyValidator = new LottoMoneyValidator();
  }
  async run() {
    try {
      const money = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      const lottoMoney = this.lottoMoneyValidator.validateLottoMoney(parseInt(money.trim(), 10))
      Console.print(lottoMoney);
    }
    catch (error) {
      Console.print(error.message);
      //throw error;
    }
  }
}

export default App;
