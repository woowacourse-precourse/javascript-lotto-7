import {Console, Random} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const money =  await this.moneyInput();
    const lottos = this.generateLottos(money / 1000);
    this.printLottos(lottos);
  }

  async moneyInput() {
    let isValid = false;
    let money;
    while (!isValid) {
      try {
        money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        money = this.validateMoney(money);
        isValid = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return money;
  }
  validateMoney(money) {
    const amount = Number(money);
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 입력 금액이 1000으로 나누어지지 않습니다.");
    }
    return amount;
  }

  async winnerLottoInput(){
    const winnerLotto = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.')
    return winnerLotto
  }

  async bonusNumberInput(){
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.')
    return bonusNumber
  }

  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(this.generateLotto());
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

}

export default App;
