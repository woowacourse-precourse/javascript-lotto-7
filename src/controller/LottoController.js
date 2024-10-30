import GameInput from "../view/GameInput.js";
import Validate from "../validate/Validate.js";

class LottoController {
  #gameInput;

  constructor() {
    this.#gameInput = new GameInput();
  }

  async startGame() {
    // 사용자에게 구입 금액을 입력받는다
    const purchase_money = await this.#userInput();
    console.log(purchase_money);
  }

  async #userInput() {
    const purchase_money = await this.#gameInput.readPurchaseMoney();
    Validate.validatePurchaseMoney(purchase_money);
    return purchase_money;
  }
}

export default LottoController;
