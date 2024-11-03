import { Console } from "@woowacourse/mission-utils";
import purchaseLotto from "./purchaseLotto.js";

class App {
  async run() {
    const cost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    purchaseLotto(cost);

    const inputWinningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = inputWinningNumbers.split(",");

    const bonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
  }
}

export default App;
