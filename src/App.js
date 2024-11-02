import { Console } from "@woowacourse/mission-utils";
import { inputAmount, inputBonusNumber, inputWinNumbers } from "./Views/inputView.js";
import { printLottoList, printWinResult, printRateResult } from "./Views/outputView.js";
import LottoGame from './LottoGame.js'
import { checkAmount, checkWinNumbers, checkBonusNumber } from "./validation.js";
class App {
  async run() {
    let amount;
    try {
      amount = await inputAmount();
      checkAmount(amount);
    } catch(error) {
      Console.print(error.message);
    }

    const lotto = new LottoGame(amount);

    const quantity = lotto.lottoQuantity();
    const lottoList = lotto.createLottoList();
    printLottoList(quantity, lottoList);

    let winNumbers; 
    try {
      winNumbers = await inputWinNumbers();
      checkWinNumbers(winNumbers);
    } catch(error) {
      Console.print(error.message);
    }

    let bonusNumber;
    try {
      bonusNumber = await inputBonusNumber();
      checkBonusNumber(bonusNumber, winNumbers);
    } catch(error) {
      Console.print(error.message);
    }

    const rankList = lotto.getWholeWinResult(winNumbers, bonusNumber);
    
    printWinResult(rankList);
    printRateResult(rankList, amount);
  }
}

export default App;
