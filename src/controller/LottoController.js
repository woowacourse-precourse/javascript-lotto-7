import { Console } from "@woowacourse/mission-utils";
import GameInput from "../view/GameInput.js";
import Validate from "../validate/Validate.js";

class LottoController {
  #gameInput;

  constructor() {
    this.#gameInput = new GameInput();
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const purchase_money = await this.#gameInput.readPurchaseMoney();
        Validate.validatePurchaseMoney(purchase_money);
        return purchase_money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async startGame() {
    // 사용자에게 구입 금액을 입력받는다
    const purchase_money = await this.#purchaseMoneyInput();
    console.log(purchase_money);
  }
}

export default LottoController;
