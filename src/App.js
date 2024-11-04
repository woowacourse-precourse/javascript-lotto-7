import { Console } from "@woowacourse/mission-utils";
import LottoManager from "./LottoManager.js";

class App {
  async run() {
    const lottoManager = new LottoManager();
    await lottoManager.runGame();
    await lottoManager.calculateResult();
  }
}

export default App;
