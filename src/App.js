import { Console } from "@woowacourse/mission-utils";
import purchaseLotto from "./purchaseLotto.js";

class App {
  async run() {
    const cost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    purchaseLotto(cost);
  }
}

export default App;
