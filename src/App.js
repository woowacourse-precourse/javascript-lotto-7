import { Console } from "@woowacourse/mission-utils";
import { InputHandler } from "./utils/InputHandler.js";
import { Validator } from "./features/validator/Validator.js";
import { HELPER_MESSAGE } from "./constants/helperMessages.js";
import Lotto from "./features/lotto/Lotto.js";
import { UserLottoInfo } from "./features/lotto/UserLottoInfo.js";

class App {
  async run() {
    const inputPrice = await InputHandler.getPrice();
    // Console.print("1 " + isNaN(inputPrice));
    const userLotto = new UserLottoInfo(inputPrice);
    userLotto.createLotto();
  }
}

export default App;
