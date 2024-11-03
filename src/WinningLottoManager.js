import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class WinningLottoManager {
  static async selectWinningNumbers() {
    try {
      const numbers = await WinningLottoManager.#getWinningNumbersInput();
      this.#validateWinningNumbers(numbers);

      return numbers;
    } catch (error) {
      Console.print(error.message);

      return this.selectWinningNumbers();
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

  static async selectBonusNumber() {
    try {
      const bonusNumber = await WinningLottoManager.#getBonusNumberInput();
      this.#validateBonusNumber(bonusNumber);

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);

      return this.selectBonusNumber();
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

  static #validateBonusNumber(bonusNumber, winningNumbers) {
    Validation.checkBonusNumber(bonusNumber, [...winningNumbers]);
  }
}

export default WinningLottoManager;
