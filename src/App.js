import { UserLotto } from "./UserLotto.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userLotto = new UserLotto();

    try {
      const amount = userLotto.getLottoPurchaseInput();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
