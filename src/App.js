import { Console } from "@woowacourse/mission-utils";
import BuyLotto from "./BuyLotto.js";


class App {
  async run() {
    try {
        const buyLotto = new BuyLotto();
        await buyLotto.run();
    } catch (error) {
        Console.print(error);
        throw(error);
    };
  };
};

export default App;
