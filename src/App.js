import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bet from "./Bet.js";
import Input from "./Inputs.js";

class App {
  async run() {
    const input = new Input();

    const bet = new Bet(await input.inputMoney());
    const betList = bet.getBetResults();
    const lotto = new Lotto(
      String(await Console.readLineAsync("당첨 번호를 입력해 주세요.\n"))
    );
    await lotto.inputBonusNumber();
    const reward = lotto.compareLottoList(betList);
    Console.print(
      `총 수익률은 ${((reward / bet.getMoney()) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default App;
