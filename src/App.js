import { Console, Random } from "@woowacourse/mission-utils"
class App {
  async run() {
    const USER_MONEY = await this.getMoney();

  }

  async getMoney(){
    let inputMoney = await Console.readLineAsync("구입금액을 입력해 주세요.");
    return this.checkMoney(Number(inputMoney));
  }

  checkMoney(money){
    if(isNaN(money)){
      throw new Error("[ERROR] 입력된 값이 숫자가 아닙니다.");
    }
    if(money%1000!==0){
      throw new Error("[ERROR] 로또 구입금액이 1000원 단위가 아닙니다.")
    }
    return money;
  }
}

export default App;
