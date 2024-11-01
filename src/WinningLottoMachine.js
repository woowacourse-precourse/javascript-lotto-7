import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class WinningLottoMachine {
  async createWinningLotto() {
    const winningNumbers = await WinningLottoMachine.#getValidWinningNums();
  }

  static async #getValidWinningNums() {
    while (true) {
      try {
        const winningNumbers = await InputView.getUserInput('당첨 번호를 입력해 주세요.\n');
        return winningNumbers;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }
}

export default WinningLottoMachine;
