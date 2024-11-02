import { Console } from "@woowacourse/mission-utils";
import LottoController from "./controller/LottoController.js";

class App {
  constructor() {
    this.controller = new LottoController();
  }
  async run() {
    try {
      const { lottoPrice, lottoNumbers } =
        await this.controller.setLottoNumbers();
      const bonusAnswer = await this.controller.setLottoAnswers();
      const winningCount = this.controller.countWinning(
        lottoNumbers,
        bonusAnswer
      );
      this.controller.calculateProfit(winningCount, lottoPrice);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
