import { Console } from "@woowacourse/mission-utils";
import { inputAmount, inputBonusNumber, inputWinNumbers } from "./Views/inputView.js";
import { printLottoList, printWinResult, printYieldResult } from "./Views/outputView.js";
import LottoGame from './LottoGame.js'
import { checkAmount, checkWinNumbers, checkBonusNumber } from "./validation.js";
class App {
  async run() {
    const amount = await this.getAmount();

    const lottoGame = new LottoGame(amount);

    this.printLotto(lottoGame);

    const winNumbers = await this.getWinNumbers();
    const bonusNumber = await this.getBonusNumber(winNumbers);

    lottoGame.getTotalWinResult(winNumbers, bonusNumber);
    
    printWinResult(lottoGame);
    printYieldResult(lottoGame);
  }

  async getAmount() {
    try {
      const amount = await inputAmount();
      checkAmount(amount);
      return amount;
    } catch(error) {
      Console.print(error.message);
      return this.getAmount();
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
      return this.getWinNumbers();
    }
  }

  async getBonusNumber(winNumbers) {
    try {
      const bonusNumber = await inputBonusNumber();
      checkBonusNumber(bonusNumber, winNumbers);
      return bonusNumber;
    } catch(error) {
      Console.print(error.message);
      return this.getBonusNumber(winNumbers);
    }
  }
}


export default App;
