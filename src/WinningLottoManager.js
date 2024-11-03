import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class WinningLottoManager {
  #winningNumbers;

  #bonusNumber;

  async setWinningNumbers() {
    try {
      const numbers = await WinningLottoManager.#getWinningNumbersInput();
      WinningLottoManager.#validateWinningNumbers(numbers);

      this.#winningNumbers = numbers;
    } catch (error) {
      Console.print(error.message);

      await this.setWinningNumbers();
    }
  }

  static async #getWinningNumbersInput() {
    const winningNumbers = await inputView.askWinningNumbers();
    const parsedNumbers = this.#parsingWinningNumbers(winningNumbers);
    return parsedNumbers;
  }

  static #parsingWinningNumbers(numbers) {
    const numbersArray = Utils.parsingToArray(numbers);
    const winningNumbers = numbersArray.map((number) =>
      Utils.parsingToNumber(number),
    );

    return winningNumbers;
  }

  static #validateWinningNumbers(numbers) {
    Validation.checkWinningNumbers([...numbers]);
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  async setBonusNumber() {
    try {
      const bonusNumber = await WinningLottoManager.#getBonusNumberInput();
      this.#validateBonusNumber(bonusNumber);

      this.#bonusNumber = bonusNumber;
    } catch (error) {
      Console.print(error.message);

      await this.setBonusNumber();
    }
  }

  static async #getBonusNumberInput() {
    const bonusNumber = await inputView.askBonusNumber();
    const parsedNumber = this.#parsingBonusNumber(bonusNumber);
    return parsedNumber;
  }

  static #parsingBonusNumber(number) {
    const parsedBonusNumber = Utils.parsingToNumber(number);
    return parsedBonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    const winningNumbers = [...this.#winningNumbers];
    Validation.checkBonusNumber(bonusNumber, winningNumbers);
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLottoManager;
