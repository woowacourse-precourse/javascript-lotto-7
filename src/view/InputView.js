import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import Validator from "../validation/Validator.js";

class InputView {
  #read;

  constructor() {
    this.#read = Console.readLineAsync;
  }

  #validate(data) {
    
  }

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
    const bonusData = await this.#read(INPUT_MESSAGE.inputBonusNumber);
    const bonusNumber = this.#separateNumber(bonusData);
    return bonusNumber;
  }
}

export default InputView;