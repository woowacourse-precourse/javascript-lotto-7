import InputView from "../views/InputView.js";
import { validateInputMoney } from "../validator/InputMoney.js";
import { validateWinningNumber } from "../validator/WinningNum.js";
import OutputView from "../views/OutputView.js";
import LottoMachine from "../models/LottoMachine.js";
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

  async #setWinningNum() {
    const winningNum = await InputView.readWinningNumber();

    return winningNum.split(",").map(Number);
  }

  async #getValidWinningNum() {
    let winningNum;
    while (true) {
      try {
        winningNum = await this.#setWinningNum();
        validateWinningNumber(winningNum);
        return winningNum;
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
    await this.#processLottoPurchase(lottoCount);

    const lottoMachine = new LottoMachine();
    const lottos = lottoMachine.generateLottos(lottoCount);

    OutputView.printLottos(lottos);
    const winningNum = await this.#getValidWinningNum();
    console.log(winningNum);
  }
}

export default LottoController;
