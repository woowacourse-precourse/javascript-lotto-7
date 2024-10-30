import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 구입 금액 입력
    const payment = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }
}

export default App;
