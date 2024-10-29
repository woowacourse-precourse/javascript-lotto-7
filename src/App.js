import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bet from "./Bet.js";

class App {
  async run() {
    const Bet = new Bet(
      String(await Console.readLineAsync("구매할 금액을 입력해주세요.\n"))
    );
    const betList = Bet.getBetResults();
    const lotto = new Lotto(
      String(await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n"))
    );
    await lotto.inputBonusNumber();
  }
}

export default App;
