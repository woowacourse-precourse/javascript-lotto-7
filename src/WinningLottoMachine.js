import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validator from './utils/Validator.js';
import WinningLotto from './WinningLotto.js';

class WinningLottoMachine {
  async createWinningLotto() {
    const winningLotto = await WinningLottoMachine.#getValidWinningLotto();
    await WinningLottoMachine.#setValidBonusNums(winningLotto);
    return winningLotto;
  }

  static async #getValidWinningLotto() {
    while (true) {
      try {
        const winningNumbers = await InputView.getUserInput('당첨 번호를 입력해 주세요.\n');
        const validNumbers = WinningLottoMachine.#validateWinningNumbers(winningNumbers);
        return new WinningLotto(validNumbers);
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  static async #setValidBonusNums(winningLotto) {
    while (true) {
      try {
        const bonusNumber = await InputView.getUserInput('보너스 번호를 입력해 주세요.\n');
        WinningLottoMachine.#validateBonusNumber(bonusNumber);
        winningLotto.setBonusNumber(parseInt(bonusNumber, 10));
        return;
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
    return winningNumbers.split(',');
  }

  static #validateBonusNumber(bonusNumber) {
    Validator.checkIsNull(bonusNumber);
    Validator.checkRegexPattern(bonusNumber, /^\d+$/, '보너스 번호는 숫자만 입력 가능합니다.');
  }
}

export default WinningLottoMachine;
