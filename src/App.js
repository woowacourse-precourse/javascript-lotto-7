import LottoApp from "./LottoApp.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoApp = new LottoApp();
    const amount = await lottoApp.promptPurchaseAmount();
    lottoApp.purchaseLottos(amount);
    const winningLotto = await lottoApp.promptWinningNumbers();
    const bonusNumber = await lottoApp.promptBonusNumber(winningLotto);
  }
}

export default App;
