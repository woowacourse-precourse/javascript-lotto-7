import { Console } from "@woowacourse/mission-utils";
import InputHandler from "./handler/InputHandler.js"
import OutputHandler from "./handler/OutputHandler.js";
import ResultController from "./controller/ResultController.js";
import LottoController from "./controller/LottoController.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.resultController = new ResultController();
    this.lottoController = new LottoController();
  }
  async run() {
    try {
      const lottoMoney = await this.inputHandler.getLottoMoney();
      const lottos = this.lottoController.generateLottos(lottoMoney);

      const winningNumber = await this.inputHandler.getWinningNumber();

      const bonusNumber = await this.inputHandler.getBonusNumber(winningNumber);
      this.resultController.execute(lottos, winningNumber, bonusNumber, lottoMoney);
    }
    catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
