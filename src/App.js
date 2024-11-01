import { Console } from "@woowacourse/mission-utils";

import Input from "./Input.js";

class App {
  #money;

  constructor() {
    this.input = new Input();
  }

  async run() {
    try {
      this.#money = await this.input.getMoney();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
