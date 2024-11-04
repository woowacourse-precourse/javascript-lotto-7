import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async UserInput() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }
  async run() {
    let lottos = [];
  }
}

export default App;
