import { Console } from "@woowacourse/mission-utils";
import { InputHandler } from "./utils/InputHandler.js";
import { Validator } from "./features/validator/Validator.js";
import { HELPER_MESSAGE } from "./constants/helperMessages.js";

class App {
  async run() {
    const price = await InputHandler.getPrice();
  }
}

export default App;
