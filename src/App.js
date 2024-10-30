import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const lottoBuyMoney = await Console.readLineAsync("구입 금액을 입력해 주세요.\n");
      Console.print(lottoBuyMoney);
    }
    catch {
      throw error;
    }
  }
}

export default App;
