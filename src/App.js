import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {

  }

  async moneyInput(){
    const money = await Console.readLineAsync('구입금액을 입력해 주세요.')
  }
}

export default App;
