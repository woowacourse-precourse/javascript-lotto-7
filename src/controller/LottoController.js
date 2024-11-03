import InputView from "../views/InputView.js";
import { validateInputMoney } from "../validator/InputMoney.js";
import OutputView from "../views/OutputView.js";
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
        return money;
      } catch (e) {
        Console.print(e);
      }
    }
  }

  #calculateLottoCount(inputMoney) {
    return Math.floor(inputMoney / 1000);
  }

  async #processLottoPurchase(lottoCount) {
    return await OutputView.printLottoCount(lottoCount);
  }

  async purchase() {
    const money = await this.#getValidMoney();
    const lottoCount = this.#calculateLottoCount(money);
    this.#processLottoPurchase(lottoCount);
  }
}

export default LottoController;
