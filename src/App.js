import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGame from "./LottoGame.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoGame = new LottoGame(purchaseAmount);
  }
  async getPurchaseAmount() {
     const purchaseAmount = await MissionUtils.Console.readLineAsync('로또 구입 금액을 입력해주세요.\n');
     return purchaseAmount;
  }
}

export default App;
