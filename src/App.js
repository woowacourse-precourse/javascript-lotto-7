import LottoApp from "./LottoApp.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoApp = new LottoApp();
    const amount = await lottoApp.promptPurchaseAmount();
    const lottos = lottoApp.purchaseLottos(amount);
    const winningLotto = await lottoApp.promptWinningNumbers();
    const bonusNumber = await lottoApp.promptBonusNumber(winningLotto);
    lottoApp.calculateStatistics(lottos, winningLotto, bonusNumber);
    const profitRate = lottoApp.calculateProfitRate(amount);
  }
}

export default App;
