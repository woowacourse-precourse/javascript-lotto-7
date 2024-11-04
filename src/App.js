import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import purchaseLotto from "./purchaseLotto.js";
import matchLotto from "./matchLotto.js";
import printMatchResult from "./printMatchResult.js";
import printRateOfReturn from "./printRateOfReturn.js";

class App {
  async run() {
    const cost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottoList = purchaseLotto(cost);

    const inputWinningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );

    const winningNumbers = new Lotto(
      inputWinningNumbers.split(",").map(Number)
    );

    const inputBonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(inputBonusNumber);

    const matchCountList = matchLotto(
      lottoList,
      winningNumbers.getNumbers(),
      bonusNumber
    );

    printMatchResult(matchCountList);

    printRateOfReturn(cost, 1000);
  }
}

export default App;
