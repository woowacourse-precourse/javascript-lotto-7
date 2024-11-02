import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Output from "./Output.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #lottos;
  #winningNumber;
  #output;

  constructor() {
    this.input = new Input();
    this.#lottos = [];
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();

      this.buyLottos();

      this.#output = new Output(this.#money, this.#lottos);
      this.#output.lottos();

      const numbers = await this.input.getWinningNumbers();
      this.#winningNumber = new Lotto(numbers);
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
}

export default App;
