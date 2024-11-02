import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputHandler from "./handler/InputHandler.js"
import OutputHandler from "./handler/OutputHandler.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
  }
  async run() {
    try {
      const lottoMoney = await this.inputHandler.getLottoMoney();
      const lottos = this.generateLottos(lottoMoney / 1000);
      this.outputHandler.printLottos(lottos);

      const winningNumber = await this.inputHandler.getWinningNumber();

      const bonusNumber = await this.inputHandler.getBonusNumber(winningNumber);
    }
    catch (error) {
      Console.print(error.message);
      //throw error;
    }
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Lotto.getRandomSixNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }

}

export default App;
