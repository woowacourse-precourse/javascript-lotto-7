import Input from "./utils/Input.js";
import Lotto from "./Lotto.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Output from "./utils/Output.js";
import Validator from "./utils/Validator.js";

class App {
  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const lottoCount = purchaseAmount / 1000;
    const lottoTickets = LottoGenerator.generateTickets(lottoCount);

    Output.printCountOfLotto(lottoCount);
    Output.printLotto(lottoTickets);

    const winningNumbers = await this.getWinningNumbers();
    const winningLotto = new Lotto(winningNumbers);
  }

  async getPurchaseAmount() {
    let purchaseAmount;
    while (true) {
      try {
        purchaseAmount = await Input.purchaseAmount();
        Validator.isNumber(purchaseAmount);
        Validator.isAboveMinimum(purchaseAmount);
        Validator.isThousandUnit(purchaseAmount);
        break;
      } catch (error) {
        Output.printError(error.message);
      }
    }
    return purchaseAmount;
  }

  async getWinningNumbers() {
    let winningNumbers;
    while (true) {
      try {
        const winningNumbersInput = await Input.winningNumbers();
        const lotto = new Lotto(winningNumbersInput);
        winningNumbers = lotto.getNumbers();
        break;
      } catch (error) {
        Output.printError(error.message);
      }
    }
    return winningNumbers;
  }
}

export default App;
