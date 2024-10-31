import GameInput from "../view/GameInput.js";
import GameOutput from "../view/GameOutput.js";
import NumberValidate from "../validate/NumberValidate.js";
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
    NumberValidate.validateNonNumber(purchase_money);
    NumberValidate.validateSmallNumber(purchase_money);
    NumberValidate.validateDivideThousand(purchase_money);
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
    while (true) {
      try {
        const wining_lotto = await this.#gameInput.readWinningLotto();
        return this.#getNumber.winningLotto(wining_lotto);
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  async #bonusNumber(wining_lotto) {
    while (true) {
      try {
        const bonus_number = await this.#gameInput.readBonusNumber();
        this.#bonusNumberValidate(bonus_number, wining_lotto);
        return bonus_number;
      } catch (error) {
        this.#gameOutput.printErrorMesssage(error);
      }
    }
  }

  #bonusNumberValidate(bonus_number, wining_lotto) {
    NumberValidate.validateNonNumber(bonus_number);
    NumberValidate.validateBonusDup(bonus_number, wining_lotto);
  }

  async startGame() {
    const new_lotto = await this.#getLotto();
    this.#gameOutput.printNewLotto(new_lotto);

    const wining_lotto = await this.#winningLotto();
    const bonus_number = await this.#bonusNumber(wining_lotto);
    console.log(bonus_number);
  }
}

export default GameController;
