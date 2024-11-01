import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validator from './utils/Validator.js';

class WinningLottoMachine {
  async createWinningLotto() {
    const winningNumbers = await WinningLottoMachine.#getValidWinningNums();
    const bonusNumber = await WinningLottoMachine.#getValidBonusNums(winningNumbers);
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

  static async #getValidBonusNums(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await InputView.getUserInput('보너스 번호를 입력해 주세요.\n');
        WinningLottoMachine.#validateBonusNumber(bonusNumber, winningNumbers);
        return bonusNumber;
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
      '당첨 번호는 숫자만 입력 가능하며 쉼표(,)를 기준으로 구분합니다.',
    );
    const splitNums = WinningLottoMachine.#splitByComma(winningNumbers);
    WinningLottoMachine.#checkValidLength(splitNums);
    splitNums.forEach((num) => {
      Validator.checkValidRange(num, 1, 45, '로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    });
    WinningLottoMachine.#checkDuplicateNum(splitNums);
  }

  static #validateBonusNumber(bonusNumber, winningNumbers) {
    Validator.checkIsNull(bonusNumber);
    Validator.checkRegexPattern(bonusNumber, /^\d+$/, '보너스 번호는 숫자만 입력 가능합니다.');
    Validator.checkValidRange(bonusNumber, 1, 45, '로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    WinningLottoMachine.#checkDuplicateBonusNum(bonusNumber, winningNumbers);
  }

  static #splitByComma(inputString) {
    return inputString.split(',');
  }

  static #checkValidLength(splitNums) {
    if (splitNums.length !== 6) throw new Error('[ERROR] 당첨 번호는 6개의 숫자를 입력해야 합니다.');
  }

  static #checkDuplicateNum(splitNums) {
    const uniqueNums = new Set(splitNums);
    if (uniqueNums.size !== splitNums.length) {
      throw new Error('[ERROR] 당첨 번호는 중복된 숫자를 포함할 수 없습니다.');
    }
  }

  static #checkDuplicateBonusNum(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }
}

export default WinningLottoMachine;
