import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import purchaseLotto from "./utils/purchaseLotto.js";
import matchLotto from "./utils/matchLotto.js";
import calculateWinningSum from "./utils/calculateWinningSum.js";
import printMatchResult from "./IO/printMatchResult.js";
import printRateOfReturn from "./IO/printRateOfReturn.js";

class App {
  async run() {
    const cost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottos = purchaseLotto(Number(cost));

    const inputWinningNumbers = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );

    const winningNumbers = new Lotto(
      inputWinningNumbers.split(",").map(Number)
    );

    const inputBonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = new Bonus(
      Number(inputBonusNumber),
      winningNumbers.getNumbers()
    );

    const matchCountList = matchLotto(
      lottos.getLottos(),
      winningNumbers.getNumbers(),
      bonusNumber.getBonusNumber()
    );

    printMatchResult(matchCountList);

    const winningSum = calculateWinningSum(matchCountList);

    printRateOfReturn(cost, winningSum);
  }
}

export default App;
