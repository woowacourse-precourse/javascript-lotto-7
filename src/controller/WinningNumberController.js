import { Utils } from "../utils/Utils.js";
import BonusNumberValidator from "../validators/BonusNumberValidator.js";
import WinningNumbersValidator from "../validators/WinningNumbersValidator.js";

class WinningNumberController {
  #inputView;
  #outputView;

  constructor({ inputView, outputView }) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  async getWinningInfo() {
    const winningNumbers = await this.#repeatUntilValidInput(() => this.#getWinningNumbers());
    const bonusNumber = await this.#repeatUntilValidInput(() =>
      this.#getBonusNumber(winningNumbers)
    );
    return { winningNumbers, bonusNumber };
  }

  async #getWinningNumbers() {
    const winningNumbers = await this.#inputView.enterWinningNumbers();
    const convertedWinningNumbers = Utils.convertWinningNumberToArray(winningNumbers);
    WinningNumbersValidator.checkValid(convertedWinningNumbers);
    return convertedWinningNumbers;
  }

  async #getBonusNumber(winningNumbers) {
    const bonusNumber = await this.#inputView.enterBonusNumber();
    const convertedBonusNumber = Utils.convertBonusNumberToNumber(bonusNumber);
    BonusNumberValidator.checkValid(convertedBonusNumber, winningNumbers);
    return convertedBonusNumber;
  }

  async #repeatUntilValidInput(callback) {
    try {
      return await callback();
    } catch (error) {
      this.#outputView.printError(error.message);
      return this.#repeatUntilValidInput(callback);
    }
  }
}

export default WinningNumberController;
