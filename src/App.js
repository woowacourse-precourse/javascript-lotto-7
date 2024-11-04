import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {
    
  }

  async moneyInput(){
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.')
  }

  async winnerLottoInput(){
    const winnerLotto = await Console.readLineAsync('당첨 번호를 입력해 주세요.')
    return winnerLotto
  }

}

export default App;
