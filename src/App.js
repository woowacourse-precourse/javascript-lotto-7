import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachine()
      lottoMachine.run()
    } catch (e) {
      console.log(e.message)
    }
  }
}

export default App;
