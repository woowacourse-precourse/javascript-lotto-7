import { Console } from "@woowacourse/mission-utils";
import { InputHandler } from "./utils/InputHandler.js";
import { Validator } from "./features/validator/Validator.js";
import { HELPER_MESSAGE, PRINT_MESSAGE } from "./constants/helperMessages.js";
import Lotto from "./features/lotto/Lotto.js";
import { UserLottoInfo } from "./features/lotto/UserLottoInfo.js";
import { printOneLine } from "./utils/console.js";
import { printLottoCount, printLottoList } from "./utils/outputHandler.js";
import { parserWinningNumber } from "./features/parserWinningNumber.js";

class App {
  async run() {
    const inputPrice = await InputHandler.getPrice();
    const userLotto = new UserLottoInfo(inputPrice, []);
    printLottoCount(userLotto);
    userLotto.createLotto();
    printLottoList(userLotto);
    const winningNumber = await InputHandler.getWinningNumbers();
    Console.print(winningNumber);
    // const winningLotto = new Lotto(winningNumber);
    // const bonusBall = await InputHandler.getBonusBall();
  }
}

export default App;
