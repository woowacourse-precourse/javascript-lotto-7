import { InputManager } from "./InputManager.js";
import { OutputManager } from "./OutputManager.js";
import { LottoManager } from "./LottoManager.js";
import { Console } from "@woowacourse/mission-utils";
import { PRICE_PER_LOTTO } from "./constants.js";

class App {
  async run() {
    try {
      const lottoManager = new LottoManager();
      // 구입 금액 입력 및 로또 생성
      const purchaseAmount = await InputManager.readPurchaseAmount();
      const lottoCount = purchaseAmount / PRICE_PER_LOTTO;
      lottoManager.setLotteryGroup(lottoCount);
      // 구매한 로또 출력
      OutputManager.printLotteryPurchase(lottoManager.getLotteryGroup());
      // 당첨 번호와 보너스 번호 입력
      const winningNumbers = await InputManager.readWinningNumbers();
      const bonusNumber = await InputManager.readBonusNumber(winningNumbers);
      // 당첨 통계 출력
      OutputManager.printLottoStatistic(lottoManager, purchaseAmount, winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
