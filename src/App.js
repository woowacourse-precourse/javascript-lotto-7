import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const lotto = new Lotto();
      await lotto.start();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
