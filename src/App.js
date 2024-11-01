import InputHandler from "./inputHandler.js";
import LottoMachine from "./lottoMachine.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const cost = await InputHandler.getCost();
    const lottoMachine = new LottoMachine(cost);

    InputHandler.validateCost(cost);

    lottoMachine.printQuantity();

    lottoMachine.lottos.forEach((element) => {
      const lotto = new Lotto(element);
      lotto.printNumbers();
    });

    const winningNumbers = InputHandler.getWinningNumbers();
  }
}

export default App;
