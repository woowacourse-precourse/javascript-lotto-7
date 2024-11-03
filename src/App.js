import LottoControllers from './controllers/LottoController.js';
import LottoValidator from './controllers/LottoValidator.js';
import PurchaseValidator from './controllers/PurchaseValidator.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './utils/constants.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoControllers();
  }

  async run() {
    // TODO: 보너스 번호 매치가 안되는 버그
    const purchaseAmount = await this.#getValidPurchaseAmount();
    const lottoTickets = await this.#controller.issueTickets(purchaseAmount);

    const winningNumbers = await this.#getValidWinningNumbers();

    const bonusNumber = Number(
      await this.#getValidBonusNumber(winningNumbers, this.#controller)
    );

    const rankCounts = this.#controller.matchLottoTickets(
      lottoTickets,
      winningNumbers,
      bonusNumber
    );

    controllers.displayResults(rankCounts);

    const profitRate = this.#controller.calculateProfit(
      rankCounts,
      purchaseAmount
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  async #getValidPurchaseAmount() {
    try {
      const amount = await Console.readLineAsync(MESSAGES.INPUT_AMOUT);
      return PurchaseValidator.validate(amount);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidPurchaseAmount();
    }
  }

  async #getValidWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync(
        MESSAGES.INPUT_WINNING_NUMBERS
      );
      return LottoValidator.validateWinningNumber(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidWinningNumbers();
    }
  }

  async #getValidBonusNumber(winningNumbers, controllers) {
    try {
      const bonusNumber = await Console.readLineAsync(
        MESSAGES.INPUT_BONUS_NUMBER
      );
      return controllers.validateBonusNumber(winningNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
      return this.#getValidBonusNumber(winningNumbers, controllers);
    }
  }
}

export default App;
