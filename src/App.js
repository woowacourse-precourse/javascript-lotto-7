import Lotto from "./Lotto/Lotto.js";
import Screen from "./Screen/Screen.js";
import Slot from "./Slot/Slot.js";
import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {

    //1. 구매 금액 입력
    const screen = new Screen()
    const inputMoney = await screen.inputMoney()
    const slot = new Slot(inputMoney)
    screen.printLotteries(slot.getPurchaseNum(),slot.getLotteryArray());

    //2.당첨번호, 보너스 입력
    const inputWinNum = await screen.inputLotto()
    const inputBonus = await screen.inputBonus()
    const lotto = new Lotto(inputWinNum,inputBonus)

  }
}

export default App;
