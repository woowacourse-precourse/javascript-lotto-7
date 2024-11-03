import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async validateMoney() {
    while (true) {
      try {
        const MONEY = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        
        this.checkIsValidateMoney(MONEY);

        return MONEY;
      } catch (error) {
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

  async validateWinningNumbers() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync("당첨번호를 입력해 주세요 (예: 1,2,3,4,5,6):\n");
        const numbers = input.split(",").map(Number);

        this.checkWinningNumbers(numbers); 

        return numbers;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  checkWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[Error] 당첨번호는 6개의 숫자여야 합니다!");
    }
    if (numbers.some(isNaN)) { // some은 배열의 하나 이상의 요소가 조건을 만족하는지 확인
      throw new Error("[Error] 당첨번호는 숫자여야 합니다!");
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[Error] 당첨번호는 1과 45 사이의 숫자여야 합니다!");
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[Error] 당첨번호는 중복될 수 없습니다!");
    }
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
