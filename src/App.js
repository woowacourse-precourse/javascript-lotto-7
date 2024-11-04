import Screen from "./Screen/Screen.js";
import Slot from "./Slot/Slot.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const screen = new Screen()
    const inputMoney = await screen.inputMoney()
    const slot = new Slot(inputMoney)
    screen.printLotteries(slot.getPurchaseNum(),slot.getLotteryArray());
  }
}

export default App;
