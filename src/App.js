import {Console, Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

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

  async bonusNumberInput(){
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.')
    return bonusNumber
  }

  generateLotto() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const number = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.add(number);
    }
    return new Lotto([...numbers]);
  }

}

export default App;
