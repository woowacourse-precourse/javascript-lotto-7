import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  checkNumber(input) {
    //숫자가 아닌 경우 |
    if (isNaN(input) || parseInt(input) != input) {
      throw new Error("[ERROR] 숫자를 입력하세요.");
    }
  }
  async run() {
    try {
      const moneyInput =
        await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
      this.checkNumber(moneyInput);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      // 에러 발생시 재입력받게 해줌
      await this.run();
    }
  }
}

export default App;
