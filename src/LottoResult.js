import { Console } from "@woowacourse/mission-utils";
import WinningCalculator from "./WinningCalculator.js";
import { OUTPUT_MESSAGE } from "./constants/ioMessage.js";

class LottoResult {
  constructor(winningNumbers, bonusNumber, tickets) {
    this.showWinningResult(winningNumbers, bonusNumber, tickets);
  }

  showWinningResult(winningNumbers, bonusNumber, tickets) {
    const winningResult = new WinningCalculator();
    winningResult.recordResult(winningNumbers, bonusNumber, tickets);

    Console.print(OUTPUT_MESSAGE.RESULT_HEDAER);
    Console.print(
      OUTPUT_MESSAGE.WINNING_STATISTICS(winningResult.getStatistics())
    );
  }
}

export default LottoResult;
