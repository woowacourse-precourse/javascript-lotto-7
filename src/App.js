import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseError } from "./utils/validator.js";
import Lotto from "./Lotto.js";
import {
  calculateProfitRate,
  calculateTotalEarnings,
  calculateWinningStatistics,
  printWinningStatistics,
} from "./utils/lotto-result.js";

class App {
  async run() {
    let lottoPurchaseInput;

    while (true) {
      try {
        lottoPurchaseInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        purchaseError(lottoPurchaseInput);
        break;
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }

    const lottoQuantity = lottoPurchaseInput / 1000;
    MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    const lottoTickets = [];
    for (let i = 0; i < lottoQuantity; i++) {
      const lotto = Lotto.generate();
      lottoTickets.push(lotto.getNumbers());
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }

    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        winningNumbers = Lotto.validateWinningNumbers(winningNumbersInput);
        break;
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }

    let bonusNumber;
    while (true) {
      try {
        const bonusNumberInput = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        bonusNumber = Lotto.validateBonusNumber(bonusNumberInput, winningNumbers);
        break;
      } catch (error) {
        MissionUtils.Console.print(`${error.message}`);
      }
    }

    const result = calculateWinningStatistics(lottoTickets, winningNumbers, bonusNumber);
    printWinningStatistics(result);

    const totalEarnings = calculateTotalEarnings(result);
    const profitRate = calculateProfitRate(totalEarnings, Number(lottoPurchaseInput));
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
