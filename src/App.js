import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);

    return payment;
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    return numbers.split(",");
  }

  async getBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
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
    const lotto = [];

    for (let i = 0; i < amount; i++) {
      const num = this.generateRandomNumber();
      const newLotto = new Lotto(num);
      lotto.push(newLotto.getNumbers());
      Console.print(lotto[i]);
    }
    Console.print("\n");

    const winningNums = await this.getWinningNumbers();
    const winningLotto = new Lotto(winningNums);
    const bonusNum = await this.getBonusNumber();

    new Winning();
  }
}

export default App;
