import InputView from "../views/InputView.js";
import { validateInputMoney } from "../validator/InputMoney.js";
import { Console } from "@woowacourse/mission-utils";

class LottoController {
  async #setMoney() {
    const inputMoney = await InputView.readInputMoney();

    return inputMoney;
  }

  async #getValidMoney() {
    let money;
    while (true) {
      try {
        money = await this.#setMoney();
        validateInputMoney(money);
        break;
      } catch (e) {
        Console.print(e);
      }
    }
  }

  async purchase() {}
}

export default LottoController;
