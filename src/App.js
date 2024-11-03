import { Console } from '@woowacourse/mission-utils';
import inputView from './userInterface/InputView.js';
import Lotto from './Lotto.js';
import LottoMachine from './LottoMachine.js';
import Utils from './utils/Utils.js';
import Validation from './Validation.js';
import WinningLottoManager from './WinningLottoManager.js';

class App {
  async run() {
    const lottoMachine = await this.getLottoMachine();
    const winningNumbers = await this.selectWinningNumbers();
    const bonusNumber = await this.selectBonusNumber();
    const winningLottoNumbers = App.makeWinningLottoNumbers(
      winningNumbers,
      bonusNumber,
    );
  }

  async getLottoMachine() {
    try {
      const payment = await App.getPayment();
      const lottoMachine = LottoMachine.constructLottoMachine(payment, Lotto);
      return lottoMachine;
    } catch (error) {
      Console.print(error.message);

      return this.getLottoMachine();
    }
  }

  static async getPayment() {
    const payment = await inputView.askPayment();
    const parsedPayment = Utils.parsingToNumber(payment);
    return parsedPayment;
  }

  static async selectWinningNumbers() {
    const winningLottoManager = new WinningLottoManager();
    await winningLottoManager.setWinningNumbers();

    return winningLottoManager.getWinningNumbers();
  }

  static async selectBonusNumber() {
    const winningLottoManager = new WinningLottoManager();
    await winningLottoManager.setBonusNumber();

    return winningLottoManager.getBonusNumber();
  }

  static makeWinningLottoNumbers(winningNumbers, bonusNumber) {
    return { numbers: winningNumbers, bonusNumber };
  }
}

export default App;
