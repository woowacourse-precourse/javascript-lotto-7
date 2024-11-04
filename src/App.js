import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async UserInput() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }
  printLottos() {
    this.lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    });
  }

  async makeUserLottos() {
    const amount = await this.UserInput();
    const howmany = amount / 1000;

    for (let i = 0; i < howmany; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottos.push(new Lotto(numbers));
    }

    Console.print(`\n${howmany}개를 구매했습니다.`);
    this.printLottos();
  }
  async run() {
    let lottos = [];
    try {
      await this.makeUserLottos();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
