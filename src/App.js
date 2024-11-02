import { Console, Random } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #lottos;
  #winningNumber;

  constructor() {
    this.input = new Input();
    this.#lottos = [];
  }

  // 구입한 로또를 배열로 관리
  buyLottos() {
    for (let i = 0; i < this.#money / 1000; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers);

      this.#lottos.push(lotto);
    }
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();

      this.buyLottos();

      const numbers = await this.input.getWinningNumbers();
      this.#winningNumber = new Lotto(numbers);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
