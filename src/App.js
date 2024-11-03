import LottoApp from "./LottoApp.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoApp = new LottoApp();
    const amount = await lottoApp.promptPurchaseAmount();
    lottoApp.purchaseLottos(amount);
  }
}

export default App;
