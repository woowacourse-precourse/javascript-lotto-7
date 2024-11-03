import { Console } from "@woowacourse/mission-utils";
import LottoManager from "./LottoManager.js";

class App {
  async run() {
    const lottoManager = new LottoManager();
    lottoManager.run();
  }
}

export default App;
