import { Console } from "@woowacourse/mission-utils";
import { getLottoCount } from "./utils/InputHandler.js";

class App {
  async run() {
    const lottoCount = await getLottoCount();
  }
}

export default App;
