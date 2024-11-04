import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import Validator from "../validation/Validator.js";

class InputView {
  #read;

  constructor() {
    this.#read = Console.readLineAsync;
  }

  #validate(data) {
    Validator.inputNullData(data);
  }

  #separateNumber(data) {
    return data.split(",").map(Number);
  }

  async readPurchaseAmount() {
    try {
      const inputPrice = await this.#read(INPUT_MESSAGE.inputPurchaseAmount);
      this.#validate(inputPrice);
      return inputPrice;
    } catch(e) {
      console.error(e.message);
      return await this.readPurchaseAmount();
    }

  }

  async readWinningLotto() {
    try {
      const winningdata = await this.#read(INPUT_MESSAGE.inputWinningNumbers);
      const winningNumber = this.#separateNumber(winningdata);
      this.#validate(winningNumber);
      return winningNumber;
    } catch(e) {
      console.error(e.message);
      return await this.readWinningLotto();
    }
  }

  async readBonusNumber() {
    try {
      const bonusData = await this.#read(INPUT_MESSAGE.inputBonusNumber);
      const bonusNumber = this.#separateNumber(bonusData);
      this.#validate(bonusNumber);
      return bonusNumber;
    } catch(e) {
      console.error(e.message);
      return await this.readBonusNumber();
    }
  }
}

export default InputView;