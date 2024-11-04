import { Console, Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class App {
  async run() {
    this.#askPurchaseAmount();
  }

  #askPurchaseAmount() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      this.#validatePurchaseAmount(input);
      const amount = parseInt(input, 10);
      const lottoCount = Math.floor(amount / 1000);
      Console.print(`\n${lottoCount}개를 구매했습니다.\n`);
      this.#generateLottos(lottoCount);
    });
  }

  #validatePurchaseAmount(input) {
    const amount = parseInt(input, 10);
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해 주세요.");
    }
  }

  #generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = this.#generateLottoNumbers();
      lottos.push(new Lotto(numbers));
      Console.print(`[${numbers.join(", ")}]`);
    }
  }

  #generateLottoNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b);
  }
}

export default App;
