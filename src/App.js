// model
import Payment from './domain/Payment.js';
import UserLotto from './domain/UserLotto.js';
import Lotto from './domain/Lotto.js';
import BonusNumber from './domain/BonusNumber.js';
import Winnings from './domain/Winnings.js';
import Revenue from './domain/Revenue.js';

// view
import inputView from './view/inputView.js';
import outputView from './view/outputView.js';

class App {
  async run() {
    const { payment, userLottoInfo } = await this.#releaseLotto();
    const { userLotto, lottoCount, lottoDetails } = userLottoInfo;

    App.#printReleasedLotto(lottoCount, lottoDetails);

    const { winningStats, rate } = await this.#playLotto(payment, userLotto);

    App.#printLottoResult(winningStats, rate);
  }

  async #releaseLotto() {
    const payment = await this.#readPayment();
    const userLottoInfo = new UserLotto(payment).getUserLottoInfo();

    return { payment, userLottoInfo };
  }

  async #playLotto(payment, userLotto) {
    const winningNumbers = await this.#readWinningNumbers();
    const bonusNumber = await this.#readBonusNumber(winningNumbers);
    const { winningStats, winningList } = new Winnings(
      userLotto,
      winningNumbers,
      bonusNumber,
    ).getWinningsInfo();
    const rate = new Revenue(winningList).getRateOfReturn(payment);

    return { winningStats, rate };
  }

  async #readPayment() {
    try {
      const input = await inputView.readPayment();
      const payment = new Payment(input).getPayment();

      return payment;
    } catch (error) {
      outputView.printError(error);

      return this.#readPayment();
    }
  }

  async #readWinningNumbers() {
    try {
      const input = await inputView.readWinningNumbers();
      const winningNumbers = new Lotto(input).getWinningNumbers();

      return winningNumbers;
    } catch (error) {
      outputView.printError(error);

      return this.#readWinningNumbers();
    }
  }

  async #readBonusNumber(winningNumbers) {
    try {
      const input = await inputView.readBonusNumber();
      const bonusNumberObj = new BonusNumber(input, winningNumbers);
      const bonusNumber = bonusNumberObj.getBonusNumber();

      return bonusNumber;
    } catch (error) {
      outputView.printError(error);

      return this.#readBonusNumber(winningNumbers);
    }
  }

  static #printReleasedLotto(lottoCount, lottoDetails) {
    outputView.printLottoCount(lottoCount);
    outputView.printUserLotto(lottoDetails);
  }

  static #printLottoResult(winningStats, rate) {
    outputView.printWinningStats(winningStats);
    outputView.printRate(rate);
  }
}

export default App;
