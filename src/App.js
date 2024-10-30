// import Lotto from "./Lotto";
import { MissionUtils } from "@woowacourse/mission-utils"


class App {
  async run() {
    const purchaseAmount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    MissionUtils.Console.print(purchaseAmount);
  }
}

export default App;
