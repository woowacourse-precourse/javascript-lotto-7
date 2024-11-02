import { Console } from "@woowacourse/mission-utils";
import { InputHandler } from "./utils/InputHandler.js";
import { Validator } from "./features/validator/Validator.js";

class App {
  async run() {
    try {
      const price = await InputHandler.getPrice();
      Validator.isValidPrice(price);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
