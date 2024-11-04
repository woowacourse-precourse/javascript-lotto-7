import InputHandler from "./InputHandler.js";
import LottoManager from "./LottoManager.js";
import WinningNumberHandler from "./WinningNumberHandler.js";
import LottoChecker from "./LottoChecker.js";
import ResultCalculator from "./ResultCalculator.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const purchaseAmount = await InputHandler.getPurchaseAmount();
      const lottos = LottoManager.issueLottos(purchaseAmount);

      const winningNumbers = await WinningNumberHandler.getWinningNumbers();
      const bonusNumber = await WinningNumberHandler.getBonusNumber();

      const matches = LottoChecker.checkLotto(lottos, winningNumbers, bonusNumber);
      const { stats, totalEarnings } = ResultCalculator.calculateResults(matches);
      const profitRate = ResultCalculator.calculateProfitRate(totalEarnings, purchaseAmount);

      Console.print("당첨 통계\n---");
      Console.print(`3개 일치 (5,000원) - ${stats[3]}개`);
      Console.print(`4개 일치 (50,000원) - ${stats[4]}개`);
      Console.print(`5개 일치 (1,500,000원) - ${stats[5]}개`);
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${stats["bonus"]}개`);
      Console.print(`6개 일치 (2,000,000,000원) - ${stats[6]}개`);
      Console.print(`총 수익률은 ${profitRate}%입니다.`);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
