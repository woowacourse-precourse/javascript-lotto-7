import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validator from './utils/Validator.js';

class WinningLottoMachine {
  async createWinningLotto() {
    const winningNumbers = await WinningLottoMachine.#getValidWinningNums();
  }

  static async #getValidWinningNums() {
    while (true) {
      try {
        const winningNumbers = await InputView.getUserInput('당첨 번호를 입력해 주세요.\n');
        WinningLottoMachine.#validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  static #validateWinningNumbers(winningNumbers) {
    Validator.checkIsNull(winningNumbers);
    Validator.checkRegexPattern(
      winningNumbers,
      /^\d+(,\d+)*$/,
      '당첨 번호는 숫자만 입력 가능하며 쉼표(,)를 기준으로 구분합니다.\n',
    );
    const splitNums = WinningLottoMachine.#splitByComma(winningNumbers);
    WinningLottoMachine.#checkValidLength(splitNums);
    splitNums.forEach((num) => {
      Validator.checkValidRange(num, 1, 45, '로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
  }

  static #splitByComma(inputString) {
    return inputString.split(',');
  }

  static #checkValidLength(splitNums) {
    if (splitNums.length !== 6) throw new Error('[ERROR] 당첨 번호는 6개의 숫자를 입력해야 합니다.\n');
  }
}

export default WinningLottoMachine;
