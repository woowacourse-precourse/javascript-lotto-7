import { InputHandler } from "./utils/InputHandler.js";
import Lotto from "./features/lotto/Lotto.js";
import { UserLottoInfo } from "./features/lotto/UserLottoInfo.js";
import {
  printLottoCount,
  printLottoList,
  printMatchInfo,
  printRateOfReturn,
} from "./utils/outputHandler.js";

class App {
  async run() {
    const inputPrice = await InputHandler.getPrice();
    const userLotto = new UserLottoInfo(inputPrice, []);
    printLottoCount(userLotto);
    userLotto.createLotto();
    printLottoList(userLotto);
    const winningNumber = await InputHandler.getWinningNumbers();
    const winningLotto = new Lotto(winningNumber);
    const bonusBall = await InputHandler.getBonusBall(winningLotto.numbers);
    userLotto.checkLottoMatch(winningLotto, bonusBall);
    printMatchInfo(userLotto);
    const rateResult = userLotto.rateOfReturn();
    printRateOfReturn(rateResult);
  }
}

export default App;
