import { Console } from "@woowacourse/mission-utils";
import LottoController from "./controllers/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();
    try {
        await lottoController.start();
    } catch (error) {
        Console.print(error.message);
        await this.run();
    }
}
}

export default App;
