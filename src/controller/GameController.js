import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import Validate from "../validate/Validate.js";
import GetNumber from "../model/GetNumber.js";
import { LOTTO_DATA } from "../constant/Data.js";

class GameController {
  #gameInput;
  #gameOutput;
  #getNumber;

  constructor() {
    this.#gameInput = new GameInput();
    this.#gameOutput = new GameOutput();
    this.#getNumber = new GetNumber();
  }

  async #getLotto() {
    const purchase_money = await this.#purchaseMoneyInput();
    const purchase_lotto = this.#purchaseLotto(purchase_money);
    const new_lotto = this.#newLotto(purchase_lotto);
    return new_lotto;
  }

  async #purchaseMoneyInput() {
    while (true) {
      try {
        const purchase_money = await this.#gameInput.readPurchaseMoney();
        this.#purchaseMoneyValidate(purchase_money);
        return purchase_money;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  #purchaseMoneyValidate(purchase_money) {
    Validate.validateNonNumber(purchase_money);
    Validate.validateSmallNumber(purchase_money);
    Validate.validateDivideThousand(purchase_money);
  }

  #purchaseLotto(purchase_money) {
    return parseInt(purchase_money / LOTTO_DATA.lottoPrice);
  }

  #newLotto(purchase_lotto) {
    return Array.from({ length: purchase_lotto }, () =>
      this.#getNumber.purchaseLotto()
    );
  }

  async #winningLotto() {
    const wining_lotto = await this.#gameInput.readWinningLotto();
    return this.#getNumber.winningLotto(wining_lotto);
  }

  async startGame() {
    const new_lotto = await this.#getLotto();
    this.#gameOutput.printNewLotto(new_lotto);

    let wining_lotto = await this.#winningLotto();
    console.log(wining_lotto);
  }
}

export default GameController;
