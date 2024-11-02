import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);

    return payment;
  }

  validatePayment(payment) {
    if (isNaN(payment)) throw new Error("[ERROR] 숫자를 입력해야 합니다.");
    if (payment <= 0)
      throw new Error("[ERROR] 0이상의 금액을 입력해야 합니다.");
    if (payment % 1000 !== 0)
      throw new Error("[ERROR] 1000원 단위로 금액을 입력해야 합니다.");
  }

  buyLotto(payment) {
    const amount = payment / 1000;
    Console.print(`${amount}개를 구매했습니다.\n`);

    return amount;
  }

  generateRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async run() {
    const payment = await this.getPayment();
    const amount = this.buyLotto(payment);

    for (let i = 0; i < amount; i++) {
      const num = this.generateRandomNumber();
      const lotto = new Lotto(num);
      Console.print(lotto.getNumbers());
    }
  }
}

export default App;
