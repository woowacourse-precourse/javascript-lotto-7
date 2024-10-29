import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import BettedMoney from "./BettedMoney.js";

class App {
  async run() {
    const bettedMoney = new BettedMoney(
      String(await Console.readLineAsync("구매할 금액을 입력해주세요.\n"))
    );
    const winningNumbers = new Lotto(
      String(await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n"))
    );
    await winningNumbers.inputBonusNumber();
  }
}

export default App;
