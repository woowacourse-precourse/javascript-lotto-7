import Lottery from "./Lottery/Lottery.js";
import Lotto from "./Lotto.js";
import Report from "./Report/Report.js";
import Screen from "./Screen/Screen.js";
import Slot from "./Slot/Slot.js";
import { Console } from "@woowacourse/mission-utils";
import { resultToPrize } from "./Util/Switch.js";
class App {
  async run() {

    //1. 구매 금액 입력
    const screen = new Screen()
    const inputMoney = await screen.inputMoney()
    const slot = new Slot(inputMoney)
    const drawmLotteries = slot.getLotteryArray()
    screen.printLotteries(slot.getPurchaseNum(),drawmLotteries.map(element => {return element.getNumbers()}));

    //2.당첨번호, 보너스 입력
    const inputWinNum = await screen.inputLotto()
    const inputBonus = await screen.inputBonus()
    const lotto = new Lotto(inputWinNum,inputBonus)

    //3.당첨 여부 확인 & 결과 등록
    const report = new Report()
    drawmLotteries.forEach(element => {
      const result = element.getResult(lotto.getWinArray(), lotto.getBonus())
      if (result !== "nothing"){
        report.result[result] += 1
        report.prize += resultToPrize(result)
      }
      
    })
    screen.printResult(report.result,report.getProfit(parseInt(inputMoney)))
    


  }
}

export default App;
