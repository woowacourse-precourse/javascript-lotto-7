import Lottery from "./Lottery/Lottery.js";
import Lotto from "./Lotto.js";
import Report from "./Report/Report.js";
import Screen from "./Screen/Screen.js";
import Slot from "./Slot/Slot.js";
import { Console } from "@woowacourse/mission-utils";
import { resultToPrize } from "./Util/Switch.js";
class App {

  async inputFirst(){
    //1. 구매 금액 입력
    this.screen = new Screen()
    this.inputMoney = await this.screen.inputMoney()
    this.slot = new Slot(this.inputMoney)
    this.drawmLotteries = this.slot.getLotteryArray()
    this.screen.printLotteries(this.slot.getPurchaseNum(),this.drawmLotteries.map(element => {return element.getNumbers()}));
  }

  async inputLottoNums(){
    //2.당첨번호, 보너스 입력
    this.inputWinNum = await this.screen.inputLotto()
    this.inputBonus = await this.screen.inputBonus()
    this.lotto = new Lotto(this.inputWinNum,this.inputBonus)

  }

  printResult(){
    //3.당첨 여부 확인 & 결과 등록
    this.report = new Report()
    this.drawmLotteries.forEach(element => {
      const result = element.getResult(this.lotto.getWinArray(), this.lotto.getBonus())
      if (result !== "nothing"){
        this.report.result[result] += 1
        this.report.prize += resultToPrize(result)
      }
      
    })
    this.screen.printResult(this.report.result,this.report.getProfit(parseInt(this.inputMoney)))

  }


  async run() {

    try {
      await this.inputFirst()
    } catch (error) {
      Console.print(error)
      await this.inputFirst()
    }

    try{
      await this.inputLottoNums()
    }catch(error){
      Console.print(error)
      await this.inputLottoNums()
    }

    this.printResult()
    

    


    
    


  }
}

export default App;
