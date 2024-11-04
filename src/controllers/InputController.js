import BonusNumberValidator from '../validators/BonusNumberValidator.js';
import WinningNumberValidator from '../validators/WinningNumberValidator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class InputController {
  /**
   * 당첨 번호를 입력받고 유효성을 검사한다.
   * @returns {Promise<number[]>} 파싱된 당첨 번호 배열
   */
  async getWinningNumbers() {
    try {
      const inputWinningNumbers = await InputView.getWinningNumbers();
      const winningNumbers = this.parseWinningNumbers(inputWinningNumbers);

      WinningNumberValidator.validate(winningNumbers);

      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getWinningNumbers();
    }
  }

  /**
   * 보너스 번호를 입력받고 유효성을 검사한다.
   * @param {number[]} winningNumbers - 당첨 번호 배열
   * @returns {Promise<number>} 보너스 번호
   */
  async getBonusNumber(winningNumbers) {
    try {
      const inputBonusNumber = await InputView.getBonusNumber();
      const bonusNumber = Number(inputBonusNumber);

      BonusNumberValidator.validate(bonusNumber, winningNumbers);

      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);

      return this.getBonusNumber(winningNumbers);
    }
  }

  /**
   * 입력된 당첨 번호 문자열을 파싱하여 숫자 배열로 변환한다.
   * @param {string} input - 사용자 입력 문자열
   * @returns {number[]} 파싱된 숫자 배열
   */
  parseWinningNumbers(input) {
    const numbers = input.split(',').map((num) => Number(num.trim()));

    return numbers;
  }
}

export default InputController;
