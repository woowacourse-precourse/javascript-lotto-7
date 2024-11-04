import InputHandler from "./inputHandler.js";
import LottoMachine from "./lottoMachine.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const cost = await InputHandler.getCost();
    const lottoMachine = new LottoMachine(cost);

    lottoMachine.printQuantity();

    lottoMachine.lottos.forEach((element) => {
      const lotto = new Lotto(element);
      lotto.printNumbers();
    });

    const winningNumbers = await InputHandler.getWinningNumbers();

    const bonusNumber = await InputHandler.getBonusNumber(winningNumbers);

    const { statistics, totalPrize } = lottoMachine.calculateWinnings(
      winningNumbers,
      bonusNumber
    );

    lottoMachine.printWinningStatistics(statistics, totalPrize);
  }
}

export default App;
