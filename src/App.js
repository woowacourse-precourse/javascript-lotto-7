import { Console } from "@woowacourse/mission-utils";
import LottoManager from "./LottoManager.js";

class App {
  async run() {
    const INPUT_PURCHASE_PRICE = await Console.readLineAsync("구입금액을 입력해 주세요.");
    const lottoManager = new LottoManager(INPUT_PURCHASE_PRICE);
  }
}

export default App;
