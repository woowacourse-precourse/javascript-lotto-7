import { Console } from "@woowacourse/mission-utils";
import { InputHandler } from "./utils/InputHandler.js";

class App {
  async run() {
    const price = await InputHandler.getPrice();
    Console.print(price);
  }
}

export default App;
