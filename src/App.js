import { MissionUtils } from "@woowacourse/mission-utils";
import { purchaseError } from "./utils/validator.js";
import Lotto from "./Lotto.js";
class App {
  async run() {
    try {
      const lottoPurchaseInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
      purchaseError(lottoPurchaseInput);
      const lottoQuantity = lottoPurchaseInput / 1000;
      MissionUtils.Console.print(`\n${lottoQuantity}개를 구매했습니다.\n`);

      const lottoTickets = {};

      for (let i = 0; i < lottoQuantity; i++) {
        const lotto = Lotto.generate();
        lottoTickets[i] = lotto.getNumbers();
        MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
      }

      // 2. 당첨 번호 입력
      const winningNumbersInput = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      const winningNumbers = Lotto.validateWinningNumbers(winningNumbersInput); // 유효성 검사 포함

      // 3. 보너스 번호 입력
      const bonusNumberInput = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      const bonusNumber = Lotto.validateBonusNumber(bonusNumberInput, winningNumbers);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
