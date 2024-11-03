import { Console } from "@woowacourse/mission-utils";
import { RUN_MESSAGE } from "./constants/constants.js";
import { validationPipe } from "./validation/validationPipe.js";

class App {
  async run() {
    const getPurchaseAmount = await Console.readLineAsync(
      RUN_MESSAGE.PURCHASE_AMOUNT
    );

    validationPipe(getPurchaseAmount);
  }
}

export default App;
