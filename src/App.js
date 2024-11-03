import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async validateMoney() {
    while (true) {
      try {
        const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        
        this.checkIsValidateMoney(MONEY);

        return MONEY;
      } 
      catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkIsValidateMoney(money) {
    if (isNaN(money)) {
      throw new Error('[Error] 숫자가 아닌 값을 입력할 수 없습니다!');
    }

    if (money < 0) {
      throw new Error('[Error] 음수는 입력할 수 없습니다!');
    }

    if (money % 1000 !== 0) {
      throw new Error('[Error] 1000 보다 적은 단위는 입력할 수 없습니다!');
    }

    return money;
  }  

  async run() {
    try {
      const LOTTO = new Lotto([1,2,3,4,5,6]);

      LOTTO.printNumbers();
      this.validateMoney();
    }
    catch (error) {
      throw error;
    }



  }
}

export default App;
