import { Console } from "@woowacourse/mission-utils";

import Input from "./Input.js";
import Lotto from "./Lotto.js";

class App {
  #money;
  #lotto;

  constructor() {
    this.input = new Input();
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();

      const numbers = await this.input.getNumbers();
      this.#lotto = new Lotto(numbers);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
