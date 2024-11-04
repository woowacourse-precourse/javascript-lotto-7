import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const moneyInput =
        await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
    } catch (error) {
      MissionUtils.Console.print(error.message);
      // 에러 발생시 재입력받게 해줌
      await this.run();
    }
  }
}

export default App;
