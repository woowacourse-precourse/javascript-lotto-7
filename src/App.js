import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  #lottos = [];

  async run() {}
  async getValidAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = Number(input);

    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
    }

    return amount;
  }

  async purchaseLottos() {
    const amount = await this.getValidAmount();
    const count = amount / 1000;

    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(new Lotto(numbers));
    }

    Console.print(`\n${count}개를 구매했습니다.`);
    this.printLottos();
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(JSON.stringify(lotto.getNumbers()));
    });
  }
}

export default App;
