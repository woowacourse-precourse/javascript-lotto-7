import LottoApp from "./LottoApp.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoApp = new LottoApp();
    const purchaseAmount = await lottoApp.promptPurchaseAmount();
  }
}

export default App;
