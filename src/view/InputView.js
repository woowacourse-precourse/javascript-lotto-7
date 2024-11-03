import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  #read;

  constructor() {
    this.#read = Console.readLineAsync;
  }

  async readPurchaseAmount() {
    const inputPrice = await this.#read(INPUT_MESSAGE.inputPurchaseAmount);
    return inputPrice;
  }

  async readWinningLotto() {
    const winningNumber = await this.#read(INPUT_MESSAGE.inputWinningNumbers);
    return winningNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await this.#read(INPUT_MESSAGE.inputBonusNumber);
    return bonusNumber;
  }
}

export default InputView