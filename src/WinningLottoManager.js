import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';

class WinningLottoManager {
  #winningNumbers;

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
}

export default WinningLottoManager;
