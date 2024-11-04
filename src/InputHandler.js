import { Console } from "@woowacourse/mission-utils";

class InputHandler {
  static async input(message) {
    const price = await this.#readInput(message + "\n");
    return price;
  }

  static #readInput(message) {
    return Console.readLineAsync(message);
  }
}

export default InputHandler;
