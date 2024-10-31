import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    let price = new Input();
    await price.inputPrice();

    let lotto = new Lotto();
    lotto.winLotto();
  }
}

export default App;
