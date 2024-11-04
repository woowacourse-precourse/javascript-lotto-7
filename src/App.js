import LottoController from "./Controller/LottoController.js";
import { IOUtils } from "./Util/IOUtils.js";

class App {
  async run() {
    try {
      const lottoController = new LottoController();
      await lottoController.run();
    } catch (err) {
      IOUtils.output(err.message);
    }
  }
}

export default App;
