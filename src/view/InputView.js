import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
  #read;

  constructor() {
    this.#read = Console.readLineAsync;
  }

  // 입력값 공백인지 유효성 검사 필요

  #separateNumber(data) {
    return data.split(",").map(Number);
  }

  async readPurchaseAmount() {
    const inputPrice = await this.#read(INPUT_MESSAGE.inputPurchaseAmount);
    return inputPrice;
  }

  async readWinningLotto() {
    const winningdata = await this.#read(INPUT_MESSAGE.inputWinningNumbers);
    const winningNumber = this.#separateNumber(winningdata);
    return winningNumber;
  }

  async readBonusNumber() {
    const bonusNumber = await this.#read(INPUT_MESSAGE.inputBonusNumber);
    return bonusNumber;
  }
}

export default InputView;