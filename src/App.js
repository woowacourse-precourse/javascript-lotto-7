import { Console } from "@woowacourse/mission-utils";
import { inputAmount, inputBonusNumber, inputWinNumbers } from "./Views/inputView.js";
import { printLottoList, printWinResult, printRateResult } from "./Views/outputView.js";
import LottoGame from './LottoGame.js'
import { checkAmount, checkWinNumbers, checkBonusNumber } from "./validation.js";
class App {
  async run() {
    const amount = await this.getAmount();

    const lotto = new LottoGame(amount);

    this.printLotto(lotto);

    const winNumbers = await this.getWinNumbers();
    const bonusNumber = await this.getBonusNumber();

    const rankList = lotto.getWholeWinResult(winNumbers, bonusNumber);
    
    printWinResult(rankList);
    printRateResult(rankList, amount);
  }

  async getAmount() {
    try {
      const amount = await inputAmount();
      checkAmount(amount);
      return amount;
    } catch(error) {
      Console.print(error.message);
    }
  }

  printLotto(lotto) {
    const quantity = lotto.lottoQuantity();
    const lottoList = lotto.createLottoList();
    printLottoList(quantity, lottoList);
  }

  async getWinNumbers() {
    try {
      const winNumbers = await inputWinNumbers();
      checkWinNumbers(winNumbers);
      return winNumbers;
    } catch(error) {
      Console.print(error.message);
    }
  }

  async getBonusNumber() {
    try {
      const winNumbers = await inputWinNumbers();
      checkWinNumbers(winNumbers);
      return winNumbers;
    } catch(error) {
      Console.print(error.message);
    }
  }
}


export default App;
