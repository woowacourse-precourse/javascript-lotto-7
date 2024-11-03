import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoMachine from "./LottoMachine.js";

class App {
  async run() {
    try {
      const lottoMachine = new LottoMachine()
      await lottoMachine.run()
    } catch (e) {
      Console.print(e.message)
    }
  }
}

export default App;
