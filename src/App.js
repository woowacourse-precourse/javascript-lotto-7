import { Console, Random } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import { INPUT_MESSAGE } from "./Constant.js";
class App {
  constructor() {
    this.IOHandler = new IOHandler();
  }
  async run() {
    const purchaseAmount = await this.IOHandler.getInput(INPUT_MESSAGE.GET_PURCHASE_AMOUNT);
    Console.print(purchaseAmount);
    const lottoNumber = await this.IOHandler.getInput(INPUT_MESSAGE.GET_LOTTO_NUMBER);
    Console.print(lottoNumber);
    const bonusNumber = await this.IOHandler.getInput(INPUT_MESSAGE.GET_BONUS_NUMBER);
    Console.print(bonusNumber);
  }
}

export default App;
