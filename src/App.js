import { Console } from "@woowacourse/mission-utils";
import purchaseLotto from "./purchaseLotto.js";
import matchLotto from "./matchLotto.js";
import printMatchResult from "./printMatchResult.js";

class App {
  async run() {
    const cost = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottoList = purchaseLotto(cost);

    const inputWinningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = inputWinningNumbers.split(",").map(Number);

    const inputBonusNumber = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(inputBonusNumber);

    const matchCountList = matchLotto(lottoList, winningNumbers, bonusNumber);

    printMatchResult(matchCountList);
  }
}

export default App;
