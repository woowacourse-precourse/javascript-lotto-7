import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bet from "./Bet.js";
import Input from "./Inputs.js";

class App {
  async run() {
    const input = new Input();
    const bet = await input.inputMoney();
    const betList = bet.getBetResults();
    const lotto = await input.InputLotto();
    await lotto.inputBonusNumber();
    const reward = lotto.compareLottoList(betList);
    Console.print(
      `총 수익률은 ${((reward / bet.getMoney()) * 100).toFixed(1)}%입니다.`
    );
  }
}

export default App;
