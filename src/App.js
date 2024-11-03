import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Output from "./Output.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #lottos;
  #winningNumber;
  #bonusNumber;
  #output;

  #match = new Map();

  constructor() {
    this.input = new Input();
    this.#lottos = [];

    this.#match = new Map([
      ["three", 0],
      ["four", 0],
      ["five", 0],
      ["fiveAndBonus", 0],
      ["six", 0],
    ]);
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();

      this.buyLottos();

      this.#output = new Output(this.#money, this.#lottos);
      this.#output.lottos();

      const numbers = await this.input.getWinningNumbers();
      this.#winningNumber = new Lotto(numbers);

      const bonusNumber = await this.input.getBonusNumber();
      this.isDuplicateBonus(bonusNumber);

      this.#winning();
      this.#printResult();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  // 구입한 로또를 배열로 관리
  buyLottos() {
    for (let i = 0; i < this.#money / 1000; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);
    }
  }

  // 입력받은 보너스 숫자가 당첨 번호와 중복되는지?
  isDuplicateBonus(bonusNumber) {
    for (const number of this.#winningNumber.getNumbers()) {
      if (number === bonusNumber)
        throw new Error("[ERROR] 보너스 숫자와 당첨 숫자가 중복됩니다.");
    }

    this.#bonusNumber = bonusNumber;
  }

  #winning() {
    for (const lotto of this.#lottos) {
      const match = lotto
        .getNumbers()
        .filter((number) => this.#winningNumber.getNumbers().includes(number));

      switch (match.length) {
        case 6:
          this.#match.set("six", this.#match.get("six") + 1);
          break;
        case 5:
          this.#checkBonus(lotto);
          break;
        case 4:
          this.#match.set("four", this.#match.get("four") + 1);
          break;
        case 3:
          this.#match.set("three", this.#match.get("three") + 1);
          break;
      }
    }
  }

  #checkBonus(lotto) {
    if (lotto.getNumbers().includes(this.#bonusNumber)) {
      this.#match.set("fiveAndBonus", this.#match.get("fiveAndBonus") + 1);
      return;
    }
    this.#match.set("five", this.#match.get("five") + 1);
  }

  #printResult() {
    Console.print(`\n`);
    Console.print(`3개 일치 (5,000원) - ${this.#match.get("three")}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#match.get("four")}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#match.get("five")}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#match.get(
        "fiveAndBonus"
      )}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#match.get("six")}개`);
  }
}

export default App;
